import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { ArrowLeft } from "lucide-react";

export function ComingSoon({ section }: { section: string }) {
  return (
    <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
      <Helmet>
        <title>{section} | Cyberspatz</title>
        {/* Unfinished/legal-stub pages shouldn't be indexed until real content ships */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Container>
        <p className="label-mono mb-4">{section}</p>
        <h1 className="text-display-lg font-display font-extrabold max-w-[18ch]">
          This page is in build.
        </h1>
        <p className="mt-6 text-paper-dim max-w-[46ch] leading-relaxed">
          We're engineering this section to the same standard as the rest of
          the site. In the meantime, our team is happy to talk through it
          directly.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/contact">
            <Button size="lg">Talk to Us</Button>
          </Link>
          <Link to="/">
            <Button size="lg" variant="secondary" className="group">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
