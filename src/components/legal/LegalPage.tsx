import type { ReactNode } from "react";
import { Seo } from "../Seo";
import { Container } from "../ui/Container";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

export function LegalPage({
  title,
  path,
  effectiveDate,
  intro,
  sections,
  draftNotice,
}: {
  title: string;
  path: string;
  effectiveDate: string;
  intro?: string;
  sections: LegalSection[];
  /** Shown as a visible banner when the content is a draft pending real review. */
  draftNotice?: string;
}) {
  return (
    <section className="pt-40 pb-32">
      <Seo
        title={title}
        description={`Cyberspatz ${title.toLowerCase()}.`}
        path={path}
      />
      <Container>
        <div className="max-w-[72ch]">
          <h1 className="text-display-lg font-display font-extrabold">{title}</h1>
          <p className="mt-4 text-sm text-steel font-mono">Effective {effectiveDate}</p>

          {draftNotice && (
            <div className="mt-8 border border-signal/40 bg-signal-soft/40 px-5 py-4">
              <p className="text-sm text-paper-dim leading-relaxed">
                <span className="font-semibold text-signal-bright">Draft — pending legal review.</span>{" "}
                {draftNotice}
              </p>
            </div>
          )}

          {intro && (
            <p className="mt-8 text-paper-dim leading-relaxed">{intro}</p>
          )}

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-display font-semibold text-paper">
                  {s.heading}
                </h2>
                <div className="mt-3 text-sm text-paper-dim leading-relaxed [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-1.5">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
