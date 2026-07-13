import { Container } from "../ui/Container";

const STEPS = [
  {
    n: "01",
    title: "Assess",
    description:
      "We map your real attack surface — infrastructure, applications, and process — before recommending anything.",
  },
  {
    n: "02",
    title: "Engineer",
    description:
      "We build or harden the system, with security requirements written into the sprint, not appended after.",
  },
  {
    n: "03",
    title: "Defend",
    description:
      "We test what we built the way an attacker would, and close what we find before it ships.",
  },
  {
    n: "04",
    title: "Scale",
    description:
      "We hand over a system — and a team — that can grow without growing its exposure.",
  },
];

export function Approach() {
  return (
    <section className="hairline py-section">
      <Container>
        <p className="label-mono mb-4">How we work</p>
        <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-16">
          The same four stages, on every engagement.
        </h2>

        <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
          {STEPS.map((step) => (
            <div key={step.n}>
              <span className="font-mono text-sm text-signal">{step.n}</span>
              <h3 className="mt-4 text-lg font-display font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
