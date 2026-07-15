import { Seo } from "../components/Seo";
import { Hero } from "../components/sections/Hero";
import { Capabilities } from "../components/sections/Capabilities";
import { Approach } from "../components/sections/Approach";
import { Metrics } from "../components/sections/Metrics";
import { CTASection } from "../components/sections/CTASection";

export function Home() {
  return (
    <>
      {/* <Seo
        title="Cyberspatz"
        description="Cyberspatz is a security-first digital engineering company — VAPT, red teaming, cloud security, and secure software engineering under one team."
        path="/"
      /> */}
      <Seo
        title="Cybersecurity & Secure Software Development | Cyberspatz"
        description="Cyberspatz provides VAPT, Penetration Testing, Red Teaming, Cloud Security, Application Security, Secure Software Development, SaaS Engineering, ERP Solutions, AI Automation, and Digital Transformation services."
        keywords={[
          "Cybersecurity Company",
          "Cybersecurity Services",
          "VAPT Services",
          "Penetration Testing",
          "Application Security",
          "API Security Testing",
          "Cloud Security Assessment",
          "Red Team Exercise",
          "Infrastructure Pentesting",
          "Secure Code Review",
          "Secure Software Development",
          "SaaS Development",
          "ERP Development",
          "Web Development",
          "Mobile App Development",
          "AI Automation",
          "Digital Transformation",
        ]}
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
