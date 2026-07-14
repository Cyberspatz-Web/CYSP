import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { ArticleThumb } from "../components/ui/ArticleThumb";
import { StatusBadge } from "../components/ui/StatusBadge";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import {
  ARTICLES,
  formatArticleDate,
  type ArticleCategory,
} from "../data/resources";
import { cn } from "../lib/utils";

const FILTERS: (ArticleCategory | "All")[] = [
  "All",
  "Security",
  "Engineering",
  "Company",
];

export function ResourcesOverview() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const articles =
    filter === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  return (
    <>
      <Seo
        title="Resources"
        description="Patterns, mistakes, and decisions from Cyberspatz security assessments and engineering work — written for the people who have to act on them."
        path="/resources"
      />
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <AmbientGlow
          tone="mixed"
          className="w-[480px] h-[480px] -top-32 left-1/3 opacity-70"
        />
        <Container className="relative">
          <StatusBadge label={`${ARTICLES.length} articles`} />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Notes from the engagements.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[54ch] leading-relaxed">
            Patterns, mistakes, and decisions we see repeatedly across security
            assessments and engineering work — written for the people who have
            to act on them.
          </p>
        </Container>
      </section>

      <section className="hairline">
        <Container>
          <div
            className="flex flex-wrap gap-2 py-8"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors",
                  filter === f
                    ? "border-signal text-signal bg-signal-soft/30"
                    : "border-border-strong text-steel hover:text-paper-dim hover:border-steel",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {articles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link to={`/resources/${article.slug}`} className="group block">
                  {/* <ArticleThumb icon={article.icon} index={i} /> */}
                  <ArticleThumb
                    icon={article.icon}
                    thumbnail={article.thumbnail}
                    index={i}
                  />
                  <div className="pt-5">
                    <div className="flex items-center gap-3 text-xs text-steel font-mono">
                      <span>{formatArticleDate(article.date)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime} read</span>
                    </div>
                    <h2 className="mt-3 text-lg font-display font-semibold text-paper group-hover:text-signal-bright transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm text-paper-dim leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono uppercase tracking-wide text-steel border border-border px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-paper-dim">No articles in this category yet.</p>
          )}
        </Container>
      </section>

      <section className="hairline py-section relative overflow-hidden">
        <AmbientGlow
          tone="amber"
          className="w-[420px] h-[420px] -bottom-32 -right-24 opacity-60"
        />
        <Container className="relative">
          <div className="border border-border-strong p-10 md:p-14">
            <p className="label-mono mb-4">Write for us</p>
            <h2 className="text-display-md font-display font-bold max-w-[24ch]">
              Have a writeup worth sharing?
            </h2>
            <p className="mt-5 text-paper-dim max-w-[58ch] leading-relaxed">
              We publish original articles, CTF writeups, and research from the
              security and engineering community — not just our own team. If
              you've got something worth sharing, send it our way. Every
              submission is reviewed before anything is posted; we'll follow up
              either way.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-paper-dim">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                Original writing only — no reposts, no AI-generated filler.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                Ethical hacking and cybersecurity research: CTF walkthroughs,
                tool breakdowns, methodology, engineering-and-security crossover
                topics.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                Include a short bio and how you'd like to be credited.
              </li>
            </ul>
            <a
              href="mailto:editorial@cyberspatz.com?subject=Article%20submission"
              className="mt-8 inline-flex"
            >
              <Button size="lg">Submit to editorial@cyberspatz.com</Button>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
