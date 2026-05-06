import React from "react";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link 
        href="/blog" 
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group w-fit"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="flex flex-col gap-6 mb-12">
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

        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-gradient">
          {post.title}
        </h1>
      </div>

      <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/5 mb-16">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-invert prose-indigo max-w-none font-body leading-relaxed 
        prose-headings:font-heading prose-headings:font-bold 
        prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
        prose-p:text-muted-foreground prose-p:text-lg
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl
        prose-img:rounded-3xl prose-img:border prose-img:border-white/5">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
