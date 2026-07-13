import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./Logo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Resources", href: "/resources" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-[72px]" aria-label="Primary">
          <Link to="/" className="flex items-center" aria-label="Cyberspatz home">
            <BrandLogo className="h-8 md:h-9" />
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium text-paper-dim hover:text-paper transition-colors",
                    location.pathname === link.href && "text-paper"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button size="md">Talk to Security Team</Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-paper p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="lg:hidden bg-ink border-t border-border">
          <Container className="py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-medium text-paper-dim hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button className="w-full">Talk to Security Team</Button>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
