"use client";

import { Zap, Brain, Briefcase } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { TiltCard } from "../components/TiltCard";
import { SpotlightCard } from "../components/SpotlightCard";

const icons = [Zap, Brain, Briefcase];

export function Products() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 overflow-x-hidden" id="products">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-4">
          {dict.products.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12 max-w-[50ch]">
          {dict.products.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {dict.products.items.map((p, idx) => {
            const Icon = icons[idx];
            return (
              <TiltCard key={p.name} className="h-full">
                <SpotlightCard className="bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 flex flex-col h-full hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-6">
                    <Icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-text flex-1">
                    {p.desc}
                  </p>
                </SpotlightCard>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
