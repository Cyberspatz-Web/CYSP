import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { FileText, MessageSquare, ShieldCheck } from "lucide-react";

const PLANNED_FEATURES = [
  {
    icon: FileText,
    title: "Findings and reports in one place",
    description: "Every deliverable from every engagement, versioned and searchable.",
  },
  {
    icon: ShieldCheck,
    title: "Remediation tracking",
    description: "See what's fixed, what's in progress, and what's overdue — without a spreadsheet.",
  },
  {
    icon: MessageSquare,
    title: "Direct line to your engagement team",
    description: "Ask about a specific finding without starting a new email thread.",
  },
];

export function ClientPortal() {
  return (
    <section className="pt-40 pb-32 min-h-[80vh]">
      <Seo
        title="Client Portal"
        description="Cyberspatz Client Portal — findings, remediation tracking, and reports for active engagement clients. In development."
        path="/portal"
      />
      <Container>
        <StatusBadge label="In development" />
        <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
          Client Portal
        </h1>
        <p className="mt-6 text-lg text-paper-dim max-w-[56ch] leading-relaxed">
          A dedicated space for active clients to track findings, remediation
          progress, and reports across engagements — currently in
          development. Until it launches, your engagement team handles all
          of this directly.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {PLANNED_FEATURES.map((f) => (
            <div key={f.title} className="border border-border-strong p-7">
              <f.icon size={20} className="text-signal" strokeWidth={1.6} />
              <p className="mt-5 text-sm font-semibold text-paper">{f.title}</p>
              <p className="mt-2 text-xs text-steel leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 hairline pt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <div>
            <p className="text-sm text-paper">Already an active client?</p>
            <p className="text-xs text-steel mt-1">
              Portal access is provisioned per engagement. Reach out to your
              engagement lead, or contact us below.
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" variant="secondary">
              Request Portal Access
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
