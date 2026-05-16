"use client";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { SpotlightCard } from "../components/SpotlightCard";
import { TiltCard } from "../components/TiltCard";
import { useI18n } from "../i18n/I18nContext";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function InsightsPage() {
  const { dict } = useI18n();
  const insights = dict.insights;

  return (
    <div className="flex flex-col min-h-full bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="flex-1 pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-x-hidden">
        <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
          {/* Header */}
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-text mb-4">
              {insights.label}
            </p>
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground mb-6 max-w-[50ch]">
              {insights.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-[65ch] mb-16">
              {insights.subtitle}
            </p>
          </FadeIn>

          {/* Posts grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {insights.posts.map((post) => (
              <StaggerItem key={post.slug}>
                <TiltCard className="h-full">
                  <SpotlightCard className="bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 flex flex-col h-full hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 min-w-0">
                    <div className="flex items-center gap-4 text-xs text-muted-text uppercase tracking-wide mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} strokeWidth={1.5} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} strokeWidth={1.5} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-text flex-1 mb-6">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/insights/${post.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:brightness-110 transition-all"
                    >
                      {insights.readMore}
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        strokeWidth={1.5}
                      />
                    </a>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
