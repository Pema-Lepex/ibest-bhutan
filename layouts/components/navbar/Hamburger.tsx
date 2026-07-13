interface HamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Animated hamburger / close button. Visible below `lg`, where NavLinks hides.
export default function Hamburger({ isOpen, onToggle }: HamburgerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white transition-colors hover:bg-white/10 lg:hidden"
    >
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "rotate-45" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          isOpen ? "-rotate-45" : "translate-y-1.5"
        }`}
      />
    </button>
  );
}
