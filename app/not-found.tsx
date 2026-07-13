import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout withHero={false}>
      <section className="flex min-h-[60vh] items-center bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <span className="text-7xl font-bold text-primary-100 md:text-8xl">
            404
          </span>

          <h1 className="mt-4 text-2xl font-bold text-primary-500 md:text-3xl">
            We couldn&apos;t find that page
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The page you were looking for may have moved. Everything on the iBEST
            site is reachable from the home page.
          </p>

          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
