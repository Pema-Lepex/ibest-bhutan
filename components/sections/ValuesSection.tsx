"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Globe,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CoreValues,
  Principles,
  ValuesIntro,
} from "@/assets/content/ibest/about";

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  bolt: Zap,
  heart: HeartHandshake,
  globe: Globe,
  handshake: Handshake,
};

// "Our Values" — the five core values as a selectable set, plus the principles
// list. Picking a value swaps the detail panel rather than opening a new page:
// the copy is short enough to belong here.
export default function ValuesSection() {
  const [active, setActive] = useState(0);
  const value = CoreValues[active];
  const ActiveIcon = ICONS[value.icon] ?? ShieldCheck;

  return (
    <section
      id="values"
      className="relative scroll-mt-20 overflow-hidden bg-primary-500 py-20 md:py-28"
    >
      {/* Subtle grid so the dark band doesn't read as flat colour */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Our Values"
          title="What we"
          highlight="stand for"
          subtitle={ValuesIntro}
          invert
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-12">
          {/* Value selector */}
          <Reveal>
            <ul className="flex flex-col gap-2.5">
              {CoreValues.map((item, i) => {
                const Icon = ICONS[item.icon] ?? ShieldCheck;
                const selected = i === active;

                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={selected}
                      className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                        selected
                          ? "border-accent-400/60 bg-white/10 shadow-lg"
                          : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07]"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          selected
                            ? "bg-accent-500 text-white"
                            : "bg-white/10 text-accent-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-base font-semibold transition-colors ${
                            selected ? "text-white" : "text-white/80"
                          }`}
                        >
                          {item.title}
                        </span>
                      </span>

                      <span
                        className={`h-6 w-1 rounded-full transition-all duration-300 ${
                          selected ? "bg-accent-400" : "bg-transparent"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Detail panel for the selected value */}
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-10">
              {/* key remounts the panel so it re-runs the fade on every switch */}
              <div key={active} className="animate-fadeIn">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg">
                  <ActiveIcon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white md:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                  {value.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              {Principles.heading}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              {Principles.intro}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {Principles.items.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 80}>
                <li className="flex items-start gap-3 text-sm text-white/80 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
