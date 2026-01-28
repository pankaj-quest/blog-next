import { Metadata } from 'next';
import { blogs } from '@/components/blog/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return { title: 'Post Not Found' };

  return {
    title: `${blog.title} | Greta Blog`,
    description: blog.description || blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.description || blog.excerpt,
      type: 'article',
      url: `https://greta.questera.ai/blog/${slug}`,
      images: blog.image ? [{ url: blog.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description || blog.excerpt,
      images: blog.image ? [blog.image] : [],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const slug = (await params).slug;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/blog" className="flex items-center gap-2 text-gray-500 hover:text-purple-500 transition-colors mb-12 group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        <header className="mb-12">
           <div className="flex items-center gap-4 mb-6">
             <span className="bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-2">
               <Tag size={12} /> {blog.category}
             </span>
           </div>
           
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
             {blog.title}
           </h1>

           <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-100 dark:border-white/5 py-6">
             <div className="flex items-center gap-2">
               <Calendar size={16} />
               {blog.date}
             </div>
             <div className="flex items-center gap-2">
               <User size={16} />
               {blog.author}
             </div>
           </div>
        </header>

        {blog.image && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-gray-100 dark:border-white/5">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>
        )}

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-purple-500 prose-strong:text-black dark:prose-strong:text-white prose-img:rounded-2xl">
          {/* Transforming markdown-ish content to minimal component-friendly blocks for better visuals */}
          <div className="whitespace-pre-line leading-relaxed text-gray-700 dark:text-gray-300">
            {blog.content}
          </div>
        </article>

        {/* CTA Section */}
        <section className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to build your next big thing?</h3>
          <p className="mb-8 opacity-90">Join founders and engineers building at the speed of thought with Greta.</p>
          <button 
            onClick={() => window.open('https://greta.questera.ai/home', '_blank')}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Start Vibe Coding Now
          </button>
        </section>
      </main>
    </div>
  );
}
