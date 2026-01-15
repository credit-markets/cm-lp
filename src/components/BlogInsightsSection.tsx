import { memo, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { createParagraphAPI } from "@paragraph-com/sdk";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  imageUrl?: string;
  publishedAt?: string;
  subtitle?: string;
}

interface ParagraphPost {
  id: string;
  title: string;
  slug: string;
  imageUrl?: string;
  publishedAt?: string;
  subtitle?: string;
}

function formatDate(timestamp?: string): string {
  try {
    if (!timestamp) return "";
    const date = new Date(parseInt(timestamp));
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

const BlogInsightsSection = memo(() => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        setIsLoading(true);
        const paragraph = createParagraphAPI();

        const pubResult = await paragraph.publications.get({
          slug: "creditmarkets"
        });

        const publication = pubResult.items?.[0];

        if (!publication) {
          throw new Error("Publication not found");
        }

        const postsResult = await paragraph.posts.get(
          { publicationId: publication.id },
          { limit: 3 }
        );

        if (postsResult.items) {
          setPosts(postsResult.items.map((post: ParagraphPost) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            imageUrl: post.imageUrl,
            publishedAt: post.publishedAt,
            subtitle: post.subtitle,
          })));
        }
      } catch (err) {
        console.error("Failed to fetch blog posts from Paragraph", {
          error: err instanceof Error ? err.message : String(err),
          publication: "creditmarkets",
        });
        setError("Unable to load blog posts");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

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
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Multiple Blue Glows for depth */}
      <div
        className="absolute top-1/4 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-0 translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-strategic-blue/20 rounded-full animate-[float-star-basic_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-strategic-blue/10 rounded-full animate-[float-star-basic_8s_ease-in-out_infinite_1s]"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-strategic-blue/15 rounded-full animate-[float-star-basic_7s_ease-in-out_infinite_2s]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with geometric accent */}
          <div className="text-center mb-20 relative">
            {/* Top accent line */}
            <div className="flex items-center justify-center gap-4 mb-6">
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

            {/* Bottom accent line */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-1 h-1 bg-strategic-blue/40 rounded-full"></div>
              <div className="w-1 h-1 bg-strategic-blue/30 rounded-full"></div>
              <div className="w-1 h-1 bg-strategic-blue/20 rounded-full"></div>
            </div>
          </div>

          {/* Loading State with animated skeletons */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/5 rounded-sm p-6 animate-pulse relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  <div className="w-full h-48 bg-dimensional-gray/30 rounded-sm mb-4"></div>
                  <div className="h-4 bg-dimensional-gray/30 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-dimensional-gray/30 rounded w-1/2"></div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white/5 border border-white/5 rounded-sm"
            >
              <p className="text-depth-gray mb-6">{error}</p>
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

          {/* Posts Grid with enhanced cards */}
          {!isLoading && !error && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="relative group"
                  >
                    {/* Card glow effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-sm bg-strategic-blue/5 blur-xl transition-opacity duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    <a
                      href={`https://paragraph.com/@creditmarkets/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative bg-white/5 border border-white/5 rounded-sm overflow-hidden hover:border-strategic-blue/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                      style={{ willChange: "transform, opacity" }}
                    >
                      {/* Cover Image with overlay gradient */}
                      {post.imageUrl && (
                        <div className="relative w-full h-56 overflow-hidden bg-dimensional-gray/30">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Gradient overlays for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-strategic-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Floating index number */}
                          <div className="absolute top-4 right-4 w-10 h-10 bg-deep-black/80 backdrop-blur-sm border border-strategic-blue/20 rounded-sm flex items-center justify-center">
                            <span className="text-strategic-blue/90 font-bold text-sm font-mono">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        {/* Date with icon */}
                        {post.publishedAt && (
                          <div className="flex items-center gap-2 mb-4 text-strategic-blue/70 text-xs font-mono uppercase tracking-widest">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-clean-white font-bold text-xl mb-3 group-hover:text-strategic-blue transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        {/* Subtitle/Excerpt */}
                        {post.subtitle && (
                          <p className="text-depth-gray/90 text-sm leading-relaxed mb-4 line-clamp-2 font-light">
                            {post.subtitle}
                          </p>
                        )}

                        {/* Read More with animated arrow */}
                        <div className="flex items-center gap-2 text-strategic-blue/70 group-hover:text-strategic-blue text-sm font-mono uppercase tracking-wider pt-4 border-t border-white/5">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-strategic-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* CTA with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center relative"
              >
                {/* Decorative elements */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-strategic-blue/5 rounded-full blur-3xl -z-10"></div>

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
                    <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-strategic-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Button>
                </a>
              </motion.div>
            </>
          )}

          {/* Empty State */}
          {!isLoading && !error && posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-strategic-blue/20 rounded-sm rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-strategic-blue/10 rounded-sm -rotate-6"></div>
              </div>
              <FileText className="w-12 h-12 text-strategic-blue/40 mx-auto mb-4" />
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
