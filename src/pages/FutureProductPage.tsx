import { useState, type FormEvent } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { TextInput } from "../components/ui/Field";
import { StatusBadge } from "../components/ui/StatusBadge";
import { getFutureProductBySlug } from "../data/futureProducts";
import { submitWaitlist } from "../lib/waitlist";
import { CheckCircle2, ArrowLeft } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function FutureProductPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const product = getFutureProductBySlug(slug);
  const isMembership = slug === "community";
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!product) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");
    const result = await submitWaitlist({
      name: name.trim(),
      email,
      product: product!.name,
    });
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <section className="pt-40 pb-32 min-h-[80vh]">
      <Seo
        title={product.name}
        description={product.description}
        path={`/${product.slug}`}
      />
      <Container>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-steel hover:text-paper-dim transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <product.icon
                size={28}
                className="text-signal"
                strokeWidth={1.6}
              />
              {product.useShenron && (
                <img
                  src="/brand/mascot-shenron.png"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 rounded-full object-cover"
                />
              )}
            </div>

            <div className="mt-8">
              <StatusBadge
                label={
                  isMembership ? "Registering members now" : "In development"
                }
              />
            </div>

            <h1 className="mt-6 text-display-lg font-display font-extrabold max-w-[18ch]">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-signal-bright">{product.tagline}</p>
            <p className="mt-6 text-paper-dim leading-relaxed max-w-[56ch]">
              {product.description}
            </p>

            <div className="mt-12 hairline pt-10">
              <p className="label-mono mb-6">
                {isMembership ? "What members get" : "What we're building"}
              </p>
              <ul className="flex flex-col gap-4">
                {product.plannedCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                    <span className="text-sm text-paper-dim leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-steel">
                {isMembership
                  ? "The platform itself is still in development — for now, registering gets you on the list for events and updates directly."
                  : "Roadmap — not yet available. Details may change before launch."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="border border-border-strong p-8">
              {status === "success" ? (
                <div>
                  <CheckCircle2
                    size={24}
                    className="text-signal"
                    strokeWidth={1.6}
                  />
                  <p className="mt-4 text-base font-semibold text-paper">
                    {isMembership
                      ? "You're registered."
                      : "You're on the list."}
                  </p>
                  <p className="mt-2 text-sm text-paper-dim leading-relaxed">
                    {isMembership
                      ? "Check your inbox for a welcome email — we'll reach out there when events and meetups are scheduled."
                      : `We'll email you when ${product.name} is ready for early access.`}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-base font-semibold text-paper">
                    {isMembership
                      ? "Register as a member"
                      : "Get notified at launch"}
                  </p>
                  <p className="mt-2 text-sm text-paper-dim leading-relaxed">
                    {isMembership
                      ? "Get invited to events, AMAs, and meetups as we schedule them."
                      : "No spam — just one email when this is ready to use."}
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-6 flex flex-col gap-3"
                  >
                    <TextInput
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Full name"
                    />
                    <TextInput
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email address"
                    />
                    {error && (
                      <p className="text-xs text-red-400" role="alert">
                        {error}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full"
                    >
                      {status === "submitting"
                        ? isMembership
                          ? "Registering…"
                          : "Joining…"
                        : isMembership
                          ? "Register as a Member"
                          : "Join the Waitlist"}
                    </Button>
                  </form>
                </>
              )}
            </div>

            <p className="mt-6 text-xs text-steel leading-relaxed">
              Have a specific need now?{" "}
              <Link
                to="/contact"
                className="text-paper-dim hover:text-signal-bright"
              >
                Talk to our team
              </Link>{" "}
              — we can often help directly while this is in development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
