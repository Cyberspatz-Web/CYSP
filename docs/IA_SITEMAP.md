# Cyberspatz — IA & Sitemap (v1)

Status: Home is fully built. All other routes are live and navigable but
render a placeholder "in build" state until their milestone.

## Top-level sitemap

```
/                          Home                         ✅ built
/about                     About                        ⏳ stub
/services                  Services (overview)          ⏳ stub
/services/:slug            Individual service page      ⏳ stub
  vapt · red-teaming · cloud-security · app-security
  secure-web-development · saas-development
  ai-automation · enterprise-software · ...
/industries                Industries                   ⏳ stub
/solutions                 Solutions                    ⏳ stub
/careers                   Careers                      ⏳ stub
/resources                 Resources / Blog              ⏳ stub
/contact                   Contact                      ⏳ stub

Future-ready (architected, not yet designed):
/community                 Community                    ⏳ stub
/academy                   Academy                      ⏳ stub
/ai                        Cyberspatz AI                 ⏳ stub
/portal                    Client Portal                ⏳ stub

Utility:
/privacy, /terms, /security-disclosure                  ⏳ stub
```

## Navigation model

- **Primary nav** (desktop + mobile): About, Services, Industries, Careers,
  Resources — kept to five items to stay enterprise-scannable.
- **Primary CTA**: "Talk to Security Team" — always visible, routes to
  `/contact`.
- **Footer**: full sitemap in four columns — Company, Security Services,
  Engineering, Ecosystem — so every current and future surface is reachable
  even before it has its own nav entry.

## Rationale

- Services are split into **Security Services** vs **Engineering** early,
  because the two buyer personas (security/compliance buyer vs.
  engineering/product buyer) scan differently — this split should carry
  through to the real `/services` page as two clearly separated tracks
  that converge on the same delivery standard.
- Ecosystem items (Community, Academy, AI, Portal) are already linked from
  the footer so the IA doesn't need to change shape when those ship —
  only the stub pages get replaced.
- `/services/:slug` is a single dynamic route today; when real service pages
  are built, keep them all sharing one layout template (hero, scope,
  deliverables, related capabilities, CTA) driven by a data file — not one
  bespoke component per service — to satisfy the "reusable / maintainable"
  standard in the project constitution.
