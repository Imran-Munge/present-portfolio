import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <SectionHeading 
        title="Journal & Insights" 
        subtitle="Sharing my thoughts on development, design, and the tech industry."
        className="mb-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-6"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/5">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="h-3 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground font-body leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all mt-2">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
