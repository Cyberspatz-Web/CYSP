import { Container } from "../ui/Container";
import { AmbientGlow } from "../ui/AmbientGlow";

const METRICS = [
  { value: "120+", label: "Engagements delivered" },
  { value: "340", label: "Critical findings closed pre-launch" },
  { value: "99.95%", label: "Monitored uptime across managed environments" },
  { value: "< 4hrs", label: "Median incident response time" },
];

export function Metrics() {
  return (
    <section className="hairline py-16 bg-ink-raised/30 relative overflow-hidden">
      <AmbientGlow tone="blue" className="w-[500px] h-[500px] -bottom-64 left-1/2 -translate-x-1/2 opacity-60" />
      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-paper tabular-nums">
                {m.value}
              </div>
              <p className="mt-2 text-sm text-steel leading-snug max-w-[22ch]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
