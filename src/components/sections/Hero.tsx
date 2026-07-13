import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { StatusBadge } from "../ui/StatusBadge";
import { Typewriter } from "../ui/Typewriter";
import { HeroPlanet } from "./HeroPlanet";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <HeroPlanet />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
        >
          <StatusBadge label="> CYBERSPATZ :: SECURITY MATRIX [ ACTIVE ]" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-8 text-display-xl font-display font-extrabold text-paper max-w-[16ch] mx-auto"
        >
          <Typewriter
            text="Security engineered in, not bolted on."
            startDelay={400}
          />
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-paper-dim max-w-[52ch] mx-auto leading-relaxed"
        >
          Cyberspatz is a security-first digital engineering company. We build
          software, run offensive assessments, and defend infrastructure — under
          one team, one standard.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/contact">
            <Button size="lg" className="group">
              Request an Assessment
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="secondary">
              Explore Capabilities
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
