import { useState, type FormEvent } from "react";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { Button } from "../components/ui/Button";
import { Field, TextInput, TextArea, Select } from "../components/ui/Field";
import { SERVICES } from "../data/services";
import { submitLead, type LeadPayload } from "../lib/leads";
import { Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

const COMPANY_SIZES = ["1–50", "51–200", "201–1,000", "1,000+"];

const NEXT_STEPS = [
  {
    n: "01",
    title: "We read it — a human, same day",
    description: "No auto-router. A security lead reads every submission.",
  },
  {
    n: "02",
    title: "A scoping call, not a sales pitch",
    description: "30 minutes to understand what you're protecting or building.",
  },
  {
    n: "03",
    title: "A fixed-scope proposal",
    description: "Clear deliverables and timeline — no open-ended retainer by default.",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload: LeadPayload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      company: String(form.get("company") || "").trim(),
      companySize: String(form.get("companySize") || ""),
      serviceInterest: String(form.get("serviceInterest") || ""),
      message: String(form.get("message") || "").trim(),
    };

    const nextErrors: Partial<Record<keyof LeadPayload, string>> = {};
    if (!payload.name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      nextErrors.email = "Enter a valid work email.";
    if (!payload.company) nextErrors.company = "Enter your company name.";
    if (!payload.message || payload.message.length < 10)
      nextErrors.message = "Tell us a little about what you need — a few sentences is enough.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    const result = await submitLead(payload);
    setStatus(result.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <>
        <Seo
          title="Contact"
          description="Talk to the Cyberspatz security team about your environment — VAPT, red teaming, secure engineering, or a custom scope."
          path="/contact"
        />
        <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
          <Container>
            <div className="max-w-[54ch]">
              <CheckCircle2 size={28} className="text-signal" strokeWidth={1.6} />
              <h1 className="mt-6 text-display-lg font-display font-extrabold">
                Got it — we'll be in touch.
              </h1>
              <p className="mt-6 text-paper-dim leading-relaxed">
                A member of our security team will reach out within one
                business day. In the meantime, feel free to look through our
                service lines to get a head start on scoping.
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Talk to the Cyberspatz security team about your environment — VAPT, red teaming, secure engineering, or a custom scope."
        path="/contact"
      />
      <section className="pt-40 pb-32 relative overflow-hidden">
      <AmbientGlow tone="blue" className="w-[440px] h-[440px] -top-32 -left-32 opacity-60" />
      <Container className="relative">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-display-lg font-display font-extrabold max-w-[14ch]">
              Talk to the security team.
            </h1>
            <p className="mt-6 text-paper-dim leading-relaxed max-w-[42ch]">
              Tell us what you're trying to protect or build. We'll come back
              with a real scope — not a form-letter reply.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-signal mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-paper">info@cyberspatz.com</p>
                  <p className="text-xs text-steel mt-0.5">For general and press inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-signal mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-paper">Response within 1 business day</p>
                  <p className="text-xs text-steel mt-0.5">Enterprise SLAs available on request</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-signal mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-paper">NDA available before scoping</p>
                  <p className="text-xs text-steel mt-0.5">Ask and we'll send one over first</p>
                </div>
              </div>
            </div>

            <div className="mt-14 hairline pt-10">
              <p className="label-mono mb-6">What happens next</p>
              <div className="flex flex-col gap-6">
                {NEXT_STEPS.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="font-mono text-xs text-signal mt-0.5">{step.n}</span>
                    <div>
                      <p className="text-sm font-medium text-paper">{step.title}</p>
                      <p className="text-xs text-steel mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" htmlFor="name" error={errors.name}>
                <TextInput id="name" name="name" autoComplete="name" placeholder="Jordan Blake" />
              </Field>
              <Field label="Work email" htmlFor="email" error={errors.email}>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jordan@company.com"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Company" htmlFor="company" error={errors.company}>
                <TextInput id="company" name="company" placeholder="Company name" />
              </Field>
              <Field label="Company size" htmlFor="companySize">
                <Select id="companySize" name="companySize" defaultValue={COMPANY_SIZES[0]}>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size} employees
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field label="What are you interested in?" htmlFor="serviceInterest">
              <Select id="serviceInterest" name="serviceInterest" defaultValue="">
                <option value="">Not sure yet</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="What are you trying to protect or build?" htmlFor="message" error={errors.message}>
              <TextArea
                id="message"
                name="message"
                rows={5}
                placeholder="A little context helps us scope accurately — systems involved, timeline, or what prompted the request."
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="self-start mt-2"
            >
              {status === "submitting" ? "Sending…" : "Send to Security Team"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-400" role="alert">
                Something went wrong sending this — please try again, or email
                info@cyberspatz.com directly.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
    </>
  );
}
