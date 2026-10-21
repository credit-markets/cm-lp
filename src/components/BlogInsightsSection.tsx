import { memo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  imageUrl?: string;
  publishedAt?: string;
  subtitle?: string;
}

interface ParagraphPublication {
  id: string;
  slug: string;
}

interface ParagraphAPIResponse<T> {
  items?: T[];
  pagination?: {
    hasMore: boolean;
    cursor?: string;
  };
}

const PARAGRAPH_API_BASE = "https://public.api.paragraph.com/api";
const PUBLICATION_SLUG = "creditmarkets";
const POSTS_LIMIT = 3;
const PUBLICATION_URL = "https://paragraph.com/@creditmarkets";

function formatDate(timestamp: string | undefined, locale: string): string {
  if (!timestamp) return "";
  const date = new Date(parseInt(timestamp));
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const publicationResponse = await fetch(
    `${PARAGRAPH_API_BASE}/v1/publications/slug/${PUBLICATION_SLUG}`,
    { headers: { "Content-Type": "application/json" } }
  );
  if (!publicationResponse.ok) {
    throw new Error(`Publication fetch failed: ${publicationResponse.status}`);
  }
  const publicationData = (await publicationResponse.json()) as ParagraphPublication;
  if (!publicationData?.id) {
    throw new Error("Publication not found");
  }

  const postsResponse = await fetch(
    `${PARAGRAPH_API_BASE}/v1/publications/${publicationData.id}/posts?limit=${POSTS_LIMIT}`,
    { headers: { "Content-Type": "application/json" } }
  );
  if (!postsResponse.ok) {
    throw new Error(`Posts fetch failed: ${postsResponse.status}`);
  }

  const postsData = (await postsResponse.json()) as ParagraphAPIResponse<BlogPost>;
  return postsData.items ?? [];
}

const BlogInsightsSection = memo(() => {
  const { t } = useLang();
  const r = t.research;
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["blog-posts", PUBLICATION_SLUG, POSTS_LIMIT],
    queryFn: fetchBlogPosts,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    if (error) {
      console.error('Blog posts fetch failed', {
        name: error instanceof Error ? error.name : 'unknown',
        message: error instanceof Error ? error.message : String(error),
        publication: PUBLICATION_SLUG,
      });
    }
  }, [error]);

  const allLink = (
    <a href={PUBLICATION_URL} target="_blank" rel="noopener noreferrer" className={`${cm.btnSecondary} group`}>
      {r.all}
      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );

  return (
    <section id="research" className={`relative ${cm.sectionPad} bg-cm-bg`}>
      <div className={cm.container}>
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-cm-accent">{r.eyebrow}</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.06]">{r.title}</h2>
          </div>
          <div className="hidden md:block">{allLink}</div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 divide-y divide-cm-border lg:divide-y-0" aria-busy="true" aria-live="polite">
            {["skel-1", "skel-2", "skel-3"].map((key) => (
              <div key={key} className="flex lg:flex-col gap-4 sm:gap-6 lg:gap-0 py-5 lg:py-0 animate-pulse lg:rounded-lg lg:overflow-hidden lg:bg-cm-surface lg:shadow-card">
                <div className="shrink-0 w-28 sm:w-48 lg:w-full aspect-[16/9] rounded-md lg:rounded-none bg-cm-raised" />
                <div className="flex-1 lg:p-6 space-y-3">
                  <div className="h-3 w-20 rounded-sm bg-cm-border" />
                  <div className="h-4 w-3/4 rounded-sm bg-cm-border" />
                  <div className="h-4 w-1/2 rounded-sm bg-cm-border" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && !isLoading && (
          <div role="alert" className={`${cm.card} text-center py-12 px-6`}>
            <p className="text-cm-text-2 mb-6">{r.error}</p>
            {allLink}
          </div>
        )}

        {!isLoading && !isError && posts.length > 0 && (
          <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 divide-y divide-cm-border lg:divide-y-0 border-y border-cm-border lg:border-0">
            {posts.map((post) => (
              <li key={post.id}>
                <a
                  href={`${PUBLICATION_URL}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex lg:flex-col gap-4 sm:gap-6 lg:gap-0 py-5 lg:py-0 h-full lg:overflow-hidden lg:rounded-lg lg:bg-cm-surface lg:shadow-card lg:hover:shadow-card-hover transition-shadow duration-200`}
                >
                  {post.imageUrl && (
                    <div className="relative shrink-0 w-28 sm:w-48 lg:w-full aspect-[16/9] overflow-hidden rounded-md lg:rounded-none bg-cm-raised border border-cm-border lg:border-0 lg:border-b">
                      <img
                        src={post.imageUrl}
                        alt=""
                        width="640"
                        height="360"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex flex-col flex-1 lg:p-6">
                    {post.publishedAt && <p className="text-xs text-cm-text-2">{formatDate(post.publishedAt, r.dateLocale)}</p>}
                    <h3 className="mt-1.5 lg:mt-3 text-base sm:text-lg font-semibold tracking-[-0.015em] leading-snug line-clamp-3 lg:line-clamp-2 group-hover:text-cm-accent transition-colors duration-200">
                      {post.title}
                    </h3>
                    {post.subtitle && (
                      <p className="hidden sm:block mt-1.5 text-[15px] text-cm-text-2 leading-relaxed line-clamp-2">{post.subtitle}</p>
                    )}
                    <span className="hidden lg:inline-flex mt-auto pt-5 items-center gap-1.5 text-sm font-medium text-cm-accent">
                      {r.read}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <div className={`${cm.card} text-center py-14 px-6`}>
            <p className="text-cm-text-2 mb-6">{r.empty}</p>
            {allLink}
          </div>
        )}

        <div className="mt-8 md:hidden">{allLink}</div>
      </div>
    </section>
  );
});

BlogInsightsSection.displayName = "BlogInsightsSection";

export default BlogInsightsSection;
