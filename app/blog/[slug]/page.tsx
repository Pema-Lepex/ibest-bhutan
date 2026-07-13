import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, User } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/common/Reveal";
import { Posts, getPost } from "@/assets/content/ibest/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found — iBEST" };

  return {
    title: `${post.title} — iBEST Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = Posts.filter((p) => p.slug !== slug);

  return (
    <MainLayout withHero={false}>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        backHref="/#blog"
        backLabel="Back to all posts"
        crumbs={[{ label: "Blog", href: "/#blog" }]}
        meta={
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-accent-400" />
              {post.author}
            </span>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-400" />
              {post.readingTime}
            </span>
          </div>
        }
      />

      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl 5xl:max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={960}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12 space-y-6">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={Math.min(i, 4) * 70}>
                <p className="text-base leading-relaxed text-slate-700 md:text-lg md:leading-[1.9] 4xl:text-2xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {post.disclaimer && (
            <p className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm italic leading-relaxed text-slate-500">
              {post.disclaimer}
            </p>
          )}
        </div>

        {/* More reading */}
        <div className="mx-auto mt-20 max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
          <div className="border-t border-slate-200 pt-14">
            <h2 className="text-2xl font-bold text-primary-500 md:text-3xl">
              Keep reading
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 110}>
                  <Link
                    href={`/blog/${other.slug}`}
                    className="group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-lg"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-xs text-slate-400">
                        {other.dateLabel}
                      </span>
                      <h3 className="mt-1 font-semibold leading-snug text-primary-500 transition-colors group-hover:text-accent-600">
                        {other.title}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-accent-600">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
