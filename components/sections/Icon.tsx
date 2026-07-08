import type { ReactNode, SVGProps } from "react";

// Minimal inline icon set (heroicons-style) used across the page sections,
// so we don't depend on image assets that may not exist in /public.
const PATHS: Record<string, ReactNode> = {
  code: (
    <>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </>
  ),
  clapper: (
    <>
      <rect x="2.5" y="8" width="19" height="12" rx="2" />
      <path d="M2.5 8l3-4h4l-3 4M9.5 8l3-4h4l-3 4" />
    </>
  ),
  sparkles: (
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
  ),
  palette: (
    <>
      <path d="M12 21a9 9 0 110-18c4.97 0 9 3.58 9 8 0 2.5-2 3.5-3.5 3.5H15a2 2 0 00-1.6 3.2A1.6 1.6 0 0112 21z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="16.5" cy="10.5" r="1" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11l14-6v14L3 13v-2z" />
      <path d="M7 12.5V16a2 2 0 002 2h1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  mapPin: (
    <>
      <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  phone: (
    <path d="M4 3h2.5a1 1 0 011 .757l.875 3.5a1 1 0 01-.36 1.03l-1.124.9a11.5 11.5 0 005.25 5.25l.9-1.125a1 1 0 011.03-.36l3.5.876a1 1 0 01.757.97V20a2 2 0 01-2 2C9.716 22 3 15.284 3 7V5a2 2 0 011-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof PATHS | string;
}

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name] ?? PATHS.check}
    </svg>
  );
}
