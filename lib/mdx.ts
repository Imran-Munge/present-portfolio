import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        readingTime: stats.text,
        content: content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePathMd = path.join(BLOG_DIR, `${slug}.md`);
  
  let actualPath = "";
  if (fs.existsSync(filePath)) {
    actualPath = filePath;
  } else if (fs.existsSync(filePathMd)) {
    actualPath = filePathMd;
  } else {
    return null;
  }

  const fileContent = fs.readFileSync(actualPath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    readingTime: stats.text,
    content: content,
  };
}
