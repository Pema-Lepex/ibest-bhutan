import Link from "next/link";
import { ArrowRight, Calendar, Clock, Megaphone, Users } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Courses } from "@/assets/content/ibest/courses";
import { Announcements } from "@/assets/content/ibest/announcements";

// "Courses" — the upcoming course list plus the announcements board. A course
// description is short enough to sit inline; an announcement carries eligibility
// criteria and schedules, so it gets its own page.
export default function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Upcoming Courses"
          title="Programmes open for"
          highlight="registration"
          subtitle="Tailor-made courses designed for maximum impact, delivered by experts who bring real industry experience into the room."
        />

        {/* Courses */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {Courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent-300 hover:shadow-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-primary-500">
                  {course.title}
                </h3>

                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Users className="h-3.5 w-3.5" />
                  {course.level}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>

                <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-500">
                  {course.contact}
                </p>

                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-accent-500"
                >
                  Register interest
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Announcements */}
        <div className="mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                <Megaphone className="h-4 w-4" />
                Announcements
              </span>
              <h3 className="mt-3 text-2xl font-bold text-primary-500 md:text-3xl">
                Notices from the Institute
              </h3>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {Announcements.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <article className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-accent-300 hover:shadow-lg md:flex-row md:items-center md:p-7">
                  {/* Date chip */}
                  <div className="flex shrink-0 items-center gap-3 md:w-44">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                      <Calendar className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-primary-500">
                        {item.dateLabel}
                      </span>
                      <span className="block text-xs text-slate-400">
                        {item.tag}
                      </span>
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold text-primary-500 md:text-lg">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/announcements/${item.slug}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-primary-500 transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
