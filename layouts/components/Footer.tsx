import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm tracking-wide text-slate-600 lg:text-base">
          © {year} Creativerse. All rights reserved. Developed by{" "}
          <Link
            href="https://ibeststudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-orange-500"
          >
            iBEST STUDIOS
          </Link>{" "}
          &{" "}
          <Link
            href="https://ibesttechnologies.bt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-orange-500"
          >
            TECHNOLOGIES
          </Link>
        </p>
      </div>
    </footer>
  );
}