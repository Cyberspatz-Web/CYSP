import { Link } from "react-router-dom";
import { BrandLogo } from "./Logo";
import { Container } from "../ui/Container";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Careers", href: "/careers" },
      { label: "Solutions", href: "/solutions" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Security Services",
    links: [
      { label: "VAPT", href: "/services/vapt" },
      { label: "Red Teaming", href: "/services/red-teaming" },
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Secure Code Review", href: "/services/secure-code-reviews" },
    ],
  },
  {
    title: "Engineering",
    links: [
      {
        label: "Secure Web Development",
        href: "/services/secure-web-development",
      },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      {
        label: "Custom Enterprise Software",
        href: "/services/enterprise-software",
      },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Community", href: "/community" },
      { label: "Academy", href: "/academy" },
      { label: "Cyberspatz AI", href: "/ai" },
      { label: "Client Portal", href: "/portal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hairline">
      <Container className="pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <BrandLogo className="h-8" />
            </Link>
            <p className="text-sm text-steel max-w-[26ch] leading-relaxed">
              Security-first digital engineering. Build. Secure. Scale.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-paper-dim hover:text-paper transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-14 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-steel font-mono">
            © {new Date().getFullYear()} Cyberspatz. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-steel font-mono">
            <Link to="/privacy" className="hover:text-paper-dim">
              Privacy
            </Link>
            <Link to="/security-disclosure" className="hover:text-paper-dim">
              Responsible Disclosure
            </Link>
            <Link to="/terms" className="hover:text-paper-dim">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
