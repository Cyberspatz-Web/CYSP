import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { AmbientGlow } from "../ui/AmbientGlow";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="hairline py-section relative overflow-hidden">
      <AmbientGlow tone="mixed" className="w-[600px] h-[600px] -top-40 right-[-200px]" />
      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong bg-ink/60 backdrop-blur-sm p-10 md:p-14">
          <div>
            <h2 className="text-display-md font-display font-bold max-w-[18ch]">
              Ready to see where you're exposed?
            </h2>
            <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
              Talk to our security team about a scoped assessment — no
              sales script, just an honest read on your risk.
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" className="group">
              Request a Demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
