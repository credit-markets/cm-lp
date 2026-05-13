import { memo, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";

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

function formatDate(timestamp?: string): string {
  if (!timestamp) return "";
  const date = new Date(parseInt(timestamp));
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <section
      id="research"
      className="py-24 bg-deep-black relative overflow-hidden below-fold-section"
    >
      {/* Animated Tech Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-0 translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      ></div>

      <div aria-hidden="true" className="absolute top-20 left-10 w-2 h-2 bg-strategic-blue/20 rounded-full animate-[float-star-basic_6s_ease-in-out_infinite]"></div>
      <div aria-hidden="true" className="absolute top-40 right-20 w-3 h-3 bg-strategic-blue/10 rounded-full animate-[float-star-basic_8s_ease-in-out_infinite_1s]"></div>
      <div aria-hidden="true" className="absolute bottom-32 left-1/4 w-2 h-2 bg-strategic-blue/15 rounded-full animate-[float-star-basic_7s_ease-in-out_infinite_2s]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <div aria-hidden="true" className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-strategic-blue/30"></div>
              <FileText className="w-5 h-5 text-strategic-blue/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-strategic-blue/30"></div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-clean-white leading-tight mb-6 tracking-tight"
            >
              Market intelligence and research
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-depth-gray leading-relaxed font-light max-w-3xl mx-auto"
            >
              Deep dives into emerging market credit, regulatory developments,
              and institutional crypto strategies
            </motion.p>

            <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-8">
              <div className="w-1 h-1 bg-strategic-blue/40 rounded-full"></div>
              <div className="w-1 h-1 bg-strategic-blue/30 rounded-full"></div>
              <div className="w-1 h-1 bg-strategic-blue/20 rounded-full"></div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-busy="true" aria-live="polite">
              {["skel-1", "skel-2", "skel-3"].map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/5 rounded-sm p-6 animate-pulse relative overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  <div className="w-full h-48 bg-dimensional-gray/30 rounded-sm mb-4"></div>
                  <div className="h-4 bg-dimensional-gray/30 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-dimensional-gray/30 rounded w-1/2"></div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="alert"
              className="text-center py-12 bg-white/5 border border-white/5 rounded-sm"
            >
              <p className="text-depth-gray mb-6">Unable to load blog posts</p>
              <a
                href="https://paragraph.com/@creditmarkets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Visit Our Blog
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          )}

          {/* Posts Grid */}
          {!isLoading && !isError && posts.length > 0 && (
            <>
              <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-strategic-blue/60 text-xs font-mono uppercase tracking-wider animate-pulse">
                <span>Swipe to see more</span>
                <ArrowRight className="w-3 h-3" />
              </div>

              <div className="flex md:grid md:grid-cols-3 gap-8 mb-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="relative group flex-shrink-0 w-[85vw] md:w-auto snap-center md:h-full"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-sm bg-strategic-blue/5 blur-xl transition-opacity duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    <a
                      href={`https://paragraph.com/@creditmarkets/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex flex-col h-full bg-white/5 border border-white/5 rounded-sm overflow-hidden hover:border-strategic-blue/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                    >
                      {post.imageUrl && (
                        <div className="relative w-full h-56 overflow-hidden bg-dimensional-gray/30 flex-shrink-0">
                          <img
                            src={post.imageUrl}
                            alt=""
                            width="640"
                            height="400"
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent"></div>
                          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-strategic-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        {post.publishedAt && (
                          <div className="flex items-center gap-2 mb-4 text-strategic-blue/70 text-xs font-mono uppercase tracking-widest">
                            <Calendar aria-hidden="true" className="w-3.5 h-3.5" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        )}

                        <h3 className="text-clean-white font-bold text-xl mb-3 group-hover:text-strategic-blue transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        {post.subtitle && (
                          <p className="text-depth-gray/90 text-sm leading-relaxed mb-4 line-clamp-2 font-light">
                            {post.subtitle}
                          </p>
                        )}

                        <div className="mt-auto flex items-center gap-2 text-strategic-blue/70 group-hover:text-strategic-blue text-sm font-mono uppercase tracking-wider pt-4 border-t border-white/5">
                          <span>Read Article</span>
                          <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-strategic-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center relative"
              >
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-strategic-blue/5 rounded-full blur-3xl -z-10"></div>

                <a
                  href="https://paragraph.com/@creditmarkets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">View All Research</span>
                    <ArrowRight aria-hidden="true" className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div aria-hidden="true" className="absolute inset-0 bg-strategic-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Button>
                </a>
              </motion.div>
            </>
          )}

          {/* Empty State */}
          {!isLoading && !isError && posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden"
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-strategic-blue/20 rounded-sm rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-strategic-blue/10 rounded-sm -rotate-6"></div>
              </div>
              <FileText aria-hidden="true" className="w-12 h-12 text-strategic-blue/40 mx-auto mb-4" />
              <p className="text-depth-gray mb-6 text-lg">
                New research coming soon
              </p>
              <a
                href="https://paragraph.com/@creditmarkets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Visit Our Blog
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
});

BlogInsightsSection.displayName = "BlogInsightsSection";

export default BlogInsightsSection;
