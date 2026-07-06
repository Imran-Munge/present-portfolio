"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <section id="blog" className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Latest Insights</h2>
            <p className="text-foreground/60 max-w-xl">
              Sharing my thoughts on AI, software architecture, and the future of technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              View all posts
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col p-6 rounded-3xl border border-border bg-card hover:border-primary/30 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-grow">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-tighter text-primary/60 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={`/blog/${post.slug}`}
                className="flex items-center gap-2 text-sm font-bold text-foreground group/link mt-auto"
              >
                Read Article
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
