import { Seo } from "../components/Seo";
import { Hero } from "../components/sections/Hero";
import { Capabilities } from "../components/sections/Capabilities";
import { Approach } from "../components/sections/Approach";
import { Metrics } from "../components/sections/Metrics";
import { CTASection } from "../components/sections/CTASection";

export function Home() {
  return (
    <>
      <Seo
        title="Cyberspatz"
        description="Cyberspatz is a security-first digital engineering company — VAPT, red teaming, cloud security, and secure software engineering under one team."
        path="/"
      />
      <Hero />
      <Capabilities />
      <Approach />
      <Metrics />
      <CTASection />
    </>
  );
}
