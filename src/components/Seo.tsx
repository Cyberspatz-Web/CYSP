import { Helmet } from "react-helmet-async";

/**
 * Seo.tsx — implements the technical/structural layer specified in the
 * Cyberspatz Search Dominance Blueprint (2026–2028). All seven volumes
 * were reviewed; what's actually implementable inside a single metadata
 * component is scoped from Volumes I–III plus the schema-specific parts
 * of IV:
 *   Volume I   — SEO/GEO/AEO Foundation (entity consistency, EEAT)
 *   Volume II  — Technical SEO, GEO & AEO Standards (metadata fields,
 *                canonical rules, structured data requirements, OG/Twitter)
 *   Volume III — Metadata, Entity & Structured Data Library (schema
 *                library, page metadata matrix, entity strategy)
 *   Volume IV  — Service SEO Playbook, §14 Service Schema Standards only
 *                (Service/FAQ/Breadcrumb/WebPage/Organization schema)
 *
 * ─────────────────────────────────────────────────────────────────
 * ⚠️ WHAT VOLUMES IV–VII ASK FOR THAT THIS FILE CANNOT DO
 * ─────────────────────────────────────────────────────────────────
 * These are real gaps, not oversights — they're not metadata-component
 * work:
 *   - Volume IV's 12-section service page template (Problem Statement,
 *     Methodology, Deliverables tables, Compliance Mapping, 6–10 FAQs
 *     per service, etc.) is a content/layout rewrite of ServiceDetail.tsx
 *     and services.ts, not something Seo.tsx renders. This file exposes
 *     a `faq` prop ready to receive that content once it's written —
 *     it can't generate the content itself without fabricating claims.
 *   - Volume V (topic clusters, pillar pages, original research, 2
 *     blogs + 1 guide + 1 research piece monthly) is an ongoing content
 *     strategy and editorial calendar — there's no file to hand you for
 *     "having ideas and writing articles regularly."
 *   - Volume VI (digital PR, conference speaking, open-source
 *     contributions, journalist relationships, backlink acquisition) is
 *     outreach and community work with no code surface at all.
 *   - Volume VII (GA4, Search Console, Bing Webmaster Tools, Ahrefs/
 *     Semrush, Microsoft Clarity, quarterly audits, dashboards) is
 *     external tooling account setup and recurring analysis — plausible
 *     next step: add each platform's verification tag/script once
 *     accounts exist, but there's nothing to verify against yet.
 * ─────────────────────────────────────────────────────────────────
 *
 * Volume IV's exact per-service title/description copy for all 19
 * service pages also isn't included here (that level of page-specific
 * content wasn't in what Volume IV actually contains — it's mostly page
 * *structure*, not copy) — existing page-level title/description props
 * are preserved as-is; every current <Seo title=... description=...
 * path=... /> call site continues to work unchanged.
 *
 * ─────────────────────────────────────────────────────────────────
 * ⚠️ ARCHITECTURAL CAVEAT — read before treating this as "done"
 * ─────────────────────────────────────────────────────────────────
 * Volume II §3 states a preferred rendering order: SSG → SSR → CSR,
 * and explicitly warns that if CSR is used, "search engines receive
 * complete HTML" must be verified. This site is client-side rendered
 * (Vite + React Router, no prerendering). Everything below is injected
 * into <head> by react-helmet-async AFTER JavaScript executes.
 *
 * Practical effect on Volume I's own stated targets:
 *   - Google, Bing: generally execute JS and will see this correctly.
 *   - ChatGPT, Claude, Perplexity, and many other AI crawlers: often do
 *     NOT execute JavaScript, and may only ever see the static
 *     index.html shell — meaning per-page titles, descriptions, and
 *     JSON-LD below may be invisible to exactly the GEO/AEO surfaces
 *     Volume I names as priorities.
 * No amount of work inside this file can close that gap — it requires
 * an architectural change (SSG via Astro/Next/vite-plugin-ssr, or a
 * prerendering/dynamic-rendering service in front of the site). Flagging
 * this honestly rather than presenting CSR-injected tags as equivalent
 * to true GEO readiness.
 * ─────────────────────────────────────────────────────────────────
 */

// ---------------------------------------------------------------------
// Site-wide constants (Volume III §3 Global Metadata Standards)
// ---------------------------------------------------------------------

const SITE_URL = "https://www.cyberspatz.com";
const SITE_NAME = "Cyberspatz";
const DEFAULT_LOCALE = "en_US";

// Volume II §12: default OG image must be 1200×630. No such asset exists
// in the repo yet — this path is a placeholder. Without a real file at
// public/og-image.png, every page's social preview will be broken.
const DEFAULT_OG_IMAGE = "/og-image.png";
const DEFAULT_OG_IMAGE_WIDTH = 1200;
const DEFAULT_OG_IMAGE_HEIGHT = 630;

// Volume III §18 Entity Strategy — the same organization identity must
// be reinforced consistently across every page's schema.
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  // Volume VI §17 Brand Mention Strategy names these as variants to
  // monitor — declaring them here as alternateName is the legitimate,
  // non-fabricated way to reinforce that they refer to the same entity.
  alternateName: ["CyberSpatz", "Cyberspatz Security"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/logo-full.png`,
  },
  description:
    "Cyberspatz is a security-first technology partner specializing in offensive cybersecurity, secure software engineering, and enterprise digital transformation.",
  // Volume III §18 Entity Strategy + Volume V §3 Knowledge Graph list
  // these as the primary/supporting entities Cyberspatz should be
  // consistently associated with. knowsAbout is schema.org's legitimate
  // property for this — it's a subject-matter declaration, not a claim
  // requiring separate verification the way e.g. a review rating would.
  knowsAbout: [
    "Offensive Security",
    "Vulnerability Assessment and Penetration Testing",
    "Red Teaming",
    "Application Security",
    "API Security",
    "Cloud Security",
    "Secure Software Development",
    "DevSecOps",
    "Secure SDLC",
    "Threat Modeling",
    "OWASP",
    "MITRE ATT&CK",
    "NIST Cybersecurity Framework",
    "ISO 27001",
    "SOC 2",
    "Zero Trust Architecture",
  ],
  // Volume III's entity strategy assumes social profiles exist to link
  // as sameAs. None are confirmed yet — populate once real profiles
  // exist; an empty/fabricated sameAs array would misrepresent the
  // entity rather than strengthen it.
  sameAs: [
    "https://www.linkedin.com/company/cyberspatz",
    "https://github.com/Cyberspatz",
    "https://www.instagram.com/official.cyberspatz",
  ] as string[],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORGANIZATION_ID },
};

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoProps {
  title: string;
  description: string;
  path: string;

  /** Social preview image path (absolute path or full URL). Defaults to the site OG image. */
  image?: string;
  /** OG type. Auto-inferred from path when omitted (article for /resources/:slug, website otherwise). */
  type?: "website" | "article";
  /** Set true for pages that shouldn't be indexed (Volume II §9 — thank-you, internal search, dashboards, staging). */
  noindex?: boolean;
  /** Legacy/optional per Volume III §3 — modern engines mostly ignore this, included for completeness only. */
  keywords?: string[];

  /** ISO date strings — required for correct Article schema. Never fabricated if omitted; datePublished is simply left out rather than guessed. */
  publishedDate?: string;
  modifiedDate?: string;

  /**
   * Real, visible on-page FAQ content. Only renders FAQPage schema when
   * provided — per Google's structured data policy, schema must match
   * visible content, so this is never auto-generated from a
   * title/description alone (Volume I §18 EEAT: trust via accuracy, not
   * schema stuffing).
   */
  faq?: FaqItem[];

  /** Manual breadcrumb override. Auto-generated from `path` when omitted (see autoBreadcrumbs below). Pass [] to suppress breadcrumbs entirely. */
  breadcrumbs?: BreadcrumbItem[];

  /**
   * Escape hatch for page-specific schema Volume III calls for that this
   * component can't safely infer from generic props alone — e.g. a real
   * JobPosting per open role on /careers, a Course once Academy actually
   * launches, or an Event once Community has real dates. Accepts one
   * schema object or an array; each is rendered as its own <script>
   * alongside whatever this component infers automatically.
   */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

/**
 * Builds a breadcrumb trail from the URL path when the caller doesn't
 * supply one explicitly. "/services/vapt" with pageTitle "VAPT" becomes
 * Home → Services → VAPT. Intermediate segments are title-cased from
 * the slug since callers don't currently pass per-segment labels.
 */
function autoBreadcrumbs(path: string, pageTitle: string): BreadcrumbItem[] {
  if (path === "/") return [];
  const segments = path.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  let accumulated = "";
  segments.forEach((segment, i) => {
    accumulated += `/${segment}`;
    const isLast = i === segments.length - 1;
    crumbs.push({
      name: isLast
        ? pageTitle
        : segment
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
      path: accumulated,
    });
  });
  return crumbs;
}

type InferredPageType =
  | "home"
  | "service-detail"
  | "services"
  | "article"
  | "resources"
  | "generic";

/** Path-pattern inference so existing call sites get better schema without every page needing to be touched individually. */
function inferPageType(path: string): InferredPageType {
  if (path === "/") return "home";
  if (/^\/services\/[^/]+$/.test(path)) return "service-detail";
  if (path === "/services") return "services";
  if (/^\/resources\/[^/]+$/.test(path)) return "article";
  if (path === "/resources") return "resources";
  return "generic";
}

function breadcrumbListSchema(items: BreadcrumbItem[]) {
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function toSchemaArray(
  schema:
    | Record<string, unknown>
    | Record<string, unknown>[]
    | null
    | undefined,
): Record<string, unknown>[] {
  if (!schema) return [];
  return Array.isArray(schema) ? schema : [schema];
}

// ---------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type,
  noindex = false,
  keywords,
  publishedDate,
  modifiedDate,
  faq,
  breadcrumbs,
  schema,
}: SeoProps) {
  const pageType = inferPageType(path);
  const resolvedType: "website" | "article" =
    type ?? (pageType === "article" ? "article" : "website");

  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  // Volume II §6/§7: 60-char title / 150–160-char description guidelines.
  // Enforced as a dev-time nudge, not a silent truncation — cutting a
  // string blindly risks chopping off "| Cyberspatz" or ending mid-word,
  // which is worse than a slightly-long tag. Content authors fix the
  // copy; this component doesn't mutate it for them.
  if (import.meta.env.DEV) {
    if (fullTitle.length > 60) {
      console.warn(
        `[Seo] Title exceeds the 60-char guideline (Volume II §6) on ${path}: ` +
          `"${fullTitle}" is ${fullTitle.length} chars.`,
      );
    }
    if (description.length > 160) {
      console.warn(
        `[Seo] Description exceeds the 150–160-char guideline (Volume II §7) on ${path}: ` +
          `${description.length} chars.`,
      );
    }
  }

  const resolvedBreadcrumbs = breadcrumbs ?? autoBreadcrumbs(path, title);

  // ---- JSON-LD assembly (Volume III §19 Schema Library) ----
  const schemas: Record<string, unknown>[] = [];

  if (pageType === "home") {
    // Volume III Page Metadata Matrix: homepage = Organization + WebSite + WebPage
    schemas.push(ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
    });
  } else {
    // Every other indexable page gets a baseline WebPage entity so the
    // site's entity graph stays connected (Volume III §18: consistent
    // entity reinforcement across every page).
    schemas.push({
      "@context": "https://schema.org",
      "@type": resolvedType === "article" ? "WebPage" : "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
    });
  }

  if (pageType === "service-detail") {
    // Volume III §5 and Volume IV §14 both require Service + FAQ +
    // BreadcrumbList + WebPage + Organization on every service page.
    // WebPage and BreadcrumbList are added unconditionally above/below;
    // Organization is satisfied via the `provider: {"@id": ...}` link
    // below rather than re-declaring the full Organization object on
    // every service page — this is the correct schema.org pattern for
    // a shared entity referenced from many pages, not a shortcut.
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      url,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: "Worldwide",
    });
  }

  if (pageType === "article") {
    // Volume III §9: Article + Person + BreadcrumbList. Person (author)
    // isn't included — the site has no author-attribution system for
    // Resources articles yet, and inventing a byline would violate the
    // same "don't fabricate schema" principle as the FAQ case above.
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url,
      publisher: { "@id": ORGANIZATION_ID },
      ...(publishedDate ? { datePublished: publishedDate } : {}),
      ...(modifiedDate
        ? { dateModified: modifiedDate }
        : publishedDate
          ? { dateModified: publishedDate }
          : {}),
    });
  }

  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const breadcrumbSchema = breadcrumbListSchema(resolvedBreadcrumbs);
  if (breadcrumbSchema) schemas.push(breadcrumbSchema);

  // Page-specific schema the caller supplies directly (JobPosting,
  // Course, Event, SoftwareApplication — see `schema` prop doc above).
  schemas.push(...toSchemaArray(schema));

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph — Volume II §12 / Volume III §15 */}
      <meta property="og:type" content={resolvedType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:width"
        content={String(DEFAULT_OG_IMAGE_WIDTH)}
      />
      <meta
        property="og:image:height"
        content={String(DEFAULT_OG_IMAGE_HEIGHT)}
      />
      <meta property="og:image:alt" content={fullTitle} />
      {resolvedType === "article" && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {resolvedType === "article" && (modifiedDate || publishedDate) && (
        <meta
          property="article:modified_time"
          content={modifiedDate || publishedDate}
        />
      )}

      {/* Twitter Card — Volume II §13 / Volume III §16 */}
      {/* twitter:site / twitter:creator omitted — no official X account confirmed yet. Add once one exists. */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD structured data — Volume III §19 */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
