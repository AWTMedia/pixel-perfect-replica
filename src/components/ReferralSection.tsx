import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ReferralSection = () => {
  return (
    <motion.section
      className="bg-background py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <motion.span
                className="text-primary block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                Attraction Audit
              </motion.span>

              <motion.span
                className="text-foreground block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              >
                in 24 hours.
              </motion.span>
            </h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
            >
              We’ll show you exactly what to fix to turn views into DMs and bookings — profile
              funnel, content plan, and conversion path.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="hero" size="lg" asChild>
                  <a href="#" aria-label="Get a free audit">
                    Get a free audit
                  </a>
                </Button>
              </motion.div>

              <a
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Or DM “ATTRACT” on Instagram
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-muted-foreground mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.26 }}
            >
              Free • 24h turnaround • actionable fixes
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <motion.p
                className="text-7xl md:text-8xl font-black text-primary leading-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                +100
              </motion.p>

              <motion.p
                className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
              >
                AUDITS
              </motion.p>

              <motion.p
                className="text-muted-foreground mt-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.26 }}
              >
                delivered… and counting
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReferralSection;
