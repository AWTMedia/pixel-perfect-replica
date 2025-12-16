import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/attractacquisition/attract-acquisition-1-1-call";
const INSTAGRAM_URL = "https://www.instagram.com/attractacq/";

const AppSection = () => {
  return (
    <motion.section
      className="bg-background py-14 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(40px,9vw,56px)] md:text-5xl font-black mb-5 md:mb-6 leading-[1.02] md:leading-tight text-foreground">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                It all starts
              </motion.span>

              <motion.span
                className="text-primary block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              >
                with a call.
              </motion.span>
            </h2>

            <motion.p
              className="text-foreground/70 text-base md:text-lg mb-5 md:mb-6 leading-relaxed max-w-[46ch] lg:max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            >
              Book a 15-minute call and we’ll map your Attraction Engine — profile funnel, content structure, and the DM
              → booking flow for your business.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-foreground/60 mb-7 md:mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            >
              <span>15 minutes</span>
              <span>•</span>
              <span>Free</span>
              <span>•</span>
              <span>Clear next step</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
            >
              <motion.div className="w-full sm:w-auto" whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" aria-label="Book a call">
                    Book a Call
                  </a>
                </Button>
              </motion.div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium text-center sm:text-left"
              >
                Or DM “ATTRACT” on Instagram
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px]"
              initial={{ opacity: 0, x: 22, scale: 0.985 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <motion.div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: [0, 0.35, 0.12], scale: [0.95, 1.05, 1] }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />

              <div className="relative bg-background border border-border rounded-3xl p-6 sm:p-7 shadow-xl">
                <p className="text-[11px] tracking-widest text-foreground/60 mb-3 text-center">
                  SCAN TO BOOK A CALL
                </p>

                <p className="font-black text-xl text-foreground mb-4 text-center">Attract Acquisition</p>

                {/* Bigger QR on mobile + stable layout */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 bg-foreground rounded-2xl flex items-center justify-center mx-auto overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}qr-book-call.png`}
                    alt="Scan to book a call"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* scan line overlay */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-white/35 to-transparent"
                      initial={{ y: -40, opacity: 0 }}
                      whileInView={{ y: 220, opacity: [0, 0.7, 0] }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
                    />
                  </motion.div>
                </div>

                <p className="text-sm text-foreground/60 mt-4 text-center">
                  Opens a 15-minute
                  <br />
                  booking link
                </p>

                <div className="mt-5 text-center">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
                  >
                    Open booking link →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AppSection;
