import { Container } from "../ui/Container";

// Semantic placeholders — replace with real client/partner logos when supplied.
const LOGO_PLACEHOLDERS = [
  "Northwind Financial",
  "Aro Health Systems",
  "Ledgerline Bank",
  "Kestrel Logistics",
  "Vantage Retail Group",
  "Merit Insurance",
];

export function TrustStrip() {
  return (
    <section className="hairline py-14">
      <Container>
        <p className="label-mono mb-8">Trusted by security-conscious teams</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-8">
          {LOGO_PLACEHOLDERS.map((name) => (
            <div
              key={name}
              className="flex items-center h-8 text-steel font-display font-semibold text-sm tracking-tight opacity-70 hover:opacity-100 transition-opacity"
              aria-label={`${name} logo placeholder`}
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
