import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Posts } from "@/assets/content/ibest/blog";

// "Blog" — post cards teasing the full articles, which live on their own pages.
export default function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Our Blog"
          title="Ideas, opinion and"
          highlight="industry notes"
          subtitle="Writing from the iBEST team on entrepreneurship, the economy and Bhutan's creative industries."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {Posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-accent-200">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block h-52 overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-500 shadow-sm backdrop-blur">
                    {post.dateLabel}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-medium text-accent-600">
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-primary-500 transition-colors duration-300 group-hover:text-accent-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
