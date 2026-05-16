"use client";

import { Lightbulb, Search, Users, Cpu } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { SpotlightCard } from "../components/SpotlightCard";

const icons = [Lightbulb, Users, Search, Cpu];
const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

export function Values() {
  const { dict } = useI18n();
  return (
    <section className="py-24 md:py-32 overflow-x-hidden" id="values">
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-12">
          {dict.values.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {dict.values.items.map((v, idx) => {
            const Icon = icons[idx];
            return (
              <SpotlightCard
                key={v.title}
                className={`${spans[idx]} bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 h-full hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 min-w-0`}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-6">
                  <Icon size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-text max-w-[50ch]">
                  {v.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
