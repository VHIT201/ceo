"use client";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { useI18n } from "../../i18n/I18nContext";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function PostDetailClient({ slug }: { slug: string }) {
  const { dict } = useI18n();
  const insights = dict.insights;
  const post = insights.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-full bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main className="flex-1 pt-24 sm:pt-32 pb-20 sm:pb-24 flex items-center justify-center">
          <p className="text-muted-text">Article not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <article className="flex-1 pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-x-hidden">
        <div className="mx-auto max-w-[720px] w-full px-4 sm:px-6 md:px-12 overflow-x-hidden">
          <a
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-text hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
            {insights.backToList}
          </a>

          <div className="flex items-center gap-4 text-xs text-muted-text uppercase tracking-wide mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} strokeWidth={1.5} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} strokeWidth={1.5} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-col gap-6 max-w-full">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90 break-words max-w-full">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle">
            <a
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-text hover:text-foreground transition-colors"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
              {insights.backToList}
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
