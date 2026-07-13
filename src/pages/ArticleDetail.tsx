import { Link, useParams, Navigate } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { ArticleThumb } from "../components/ui/ArticleThumb";
import { ARTICLES, getArticleBySlug, formatArticleDate } from "../data/resources";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const currentIndex = ARTICLES.findIndex((a) => a.slug === article.slug);
  const next = ARTICLES[(currentIndex + 1) % ARTICLES.length];

  return (
    <>
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/resources/${article.slug}`}
      />
      <article>
        <section className="pt-40 pb-12 md:pt-48">
          <Container>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm text-steel hover:text-paper-dim transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All articles
            </Link>

            <p className="label-mono mb-4">{article.category}</p>
            <h1 className="text-display-lg font-display font-extrabold max-w-[24ch]">
              {article.title}
            </h1>

            <div className="mt-6 flex items-center gap-3 text-xs text-steel font-mono">
              <span>{formatArticleDate(article.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime} read</span>
            </div>
          </Container>
        </section>

        <Container>
          <div className="max-w-content">
            <ArticleThumb icon={article.icon} index={currentIndex} />
          </div>
        </Container>

        <section className="py-section">
          <Container>
            <div className="max-w-[68ch] flex flex-col gap-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-paper-dim leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono uppercase tracking-wide text-steel border border-border px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-6">Next</p>
          <Link to={`/resources/${next.slug}`} className="group block">
            <h2 className="text-display-md font-display font-bold max-w-[26ch] group-hover:text-signal-bright transition-colors">
              {next.title}
            </h2>
            <p className="mt-4 text-paper-dim max-w-[54ch] leading-relaxed">
              {next.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal">
              Read article
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[18ch]">
                Facing something similar?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                Talk to our security team about your specific environment —
                no generic advice, just what applies to you.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button size="lg">Talk to Security Team</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
