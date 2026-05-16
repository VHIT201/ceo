"use client";

import { SpotlightCard } from "../components/SpotlightCard";
import { useI18n } from "../i18n/I18nContext";

function useMetrics() {
  const { dict } = useI18n();
  return dict.metrics.items;
}

export function Metrics() {
  const { dict } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-deep-ink overflow-x-hidden" id="about">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-12">
          {dict.metrics.label}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-2xl overflow-hidden w-full">
          {useMetrics().map((m) => (
            <SpotlightCard key={m.label} className="bg-background p-8 md:p-10 flex flex-col gap-3 h-full rounded-none min-w-0">
              <div className="text-4xl md:text-5xl font-medium text-accent font-mono">
                {m.value}
              </div>
              <div className="text-base font-medium text-foreground">
                {m.label}
              </div>
              <div className="text-sm text-muted-text leading-relaxed">
                {m.desc}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
