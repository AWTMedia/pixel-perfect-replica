import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/attractacquisition/attract-acquisition-1-1-call";
const INSTAGRAM_URL = "https://www.instagram.com/attractacq/";

const MadeWithLoveSection = () => {
  return (
    <motion.section
      className="relative overflow-hidden aa-bg py-16 md:py-24"
      initial={{ opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* Depth layers */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 18, y: 10 }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]"
          initial={{ x: 0, y: 0 }}
          animate={{ x: -16, y: -12 }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative text-center">
        <motion.p
          className="text-white/70 font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Get Attractive™
        </motion.p>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            Built to Convert
          </motion.span>

          <motion.span
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.2, delay: 0.12 }}
          >
            <motion.span
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.12, 1] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.14 }}
              className="inline-flex"
            >
              <Heart className="w-7 h-7 fill-white/80 text-white/80" />
            </motion.span>
          </motion.span>
        </h2>

        <motion.p
          className="text-white/85 max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          Physical businesses don’t need more content — they need a system that turns attention into
          clients, every week.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button variant="hero" size="lg" asChild>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a call"
              >
                Book a Call
              </a>
            </Button>
          </motion.div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-white transition-colors font-medium"
          >
            Or DM “ATTRACT” on Instagram
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MadeWithLoveSection;
