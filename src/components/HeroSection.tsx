import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/attractacquisition/attract-acquisition-1-1-call";
const INSTAGRAM_URL = "https://www.instagram.com/attractacq/";

const HeroAndStages = () => {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "We rebuild your profile funnel + content structure so the right people want to DM you.",
      subtitle: "Stage 1",
      price: "Attract",
    },
    {
      title: "We install stories + DM touchpoints that build trust and move people forward.",
      subtitle: "Stage 2",
      price: "Nurture",
    },
    {
      title: "We create the path from view → DM → booking → sale, with scripts and tracking.",
      subtitle: "Stage 3",
      price: "Convert",
    },
  ];

  const heroContainer = {
    hidden: {},
    show: {
      transition: shouldReduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const heroItem = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: "blur(6px)" as any },
    show: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)" as any,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
  };

  const cardsContainer = {
    hidden: {},
    show: {
      transition: shouldReduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const cardItem = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98, filter: "blur(6px)" as any },
    show: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)" as any,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
  };

  const handleScrollCue = () => {
    const el = document.getElementById("attraction-engine");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden aa-bg">
      {/* Subtle depth layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative">
        {/* HERO (FULL SCREEN) */}
        <div className="min-h-[100svh] grid grid-rows-[1fr_auto]">
          {/* Mobile-only: tighter top padding + centered content */}
          <div className="flex items-center pt-14 md:pt-24 pb-8">
            <motion.div
              className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={heroItem}
                className="text-[clamp(44px,10vw,64px)] md:text-7xl font-black text-white leading-[0.95] md:leading-[1.02] mb-5 md:mb-6"
              >
                Turn Instagram into clients for your physical business.
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="text-white/80 text-base md:text-xl mb-6 md:mb-7 max-w-[42ch] mx-auto md:mx-0"
              >
                We build Attraction Engines that convert random posting into DMs, bookings, and sales — without posting
                more for the sake of it.
              </motion.p>

              <motion.div
                variants={heroItem}
                className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 items-center md:items-start"
              >
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-[0_18px_50px_rgba(11,15,25,0.45)] hover:shadow-[0_22px_65px_rgba(157,75,255,0.22)] hover:-translate-y-[1px] transition-all"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Attractive (Book a call)"
                  >
                    Get Attractive
                  </a>
                </Button>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium text-center sm:text-left"
                >
                  Or DM “ATTRACT” on Instagram →
                </a>
              </motion.div>

              <motion.div
                variants={heroItem}
                className="flex items-center gap-2 mt-6 md:mt-7 justify-center md:justify-start"
              >
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">
                  Trustpilot <span className="text-white/60">•</span>{" "}
                  <span className="text-white/70">Rated 5/5</span>
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll cue (bottom of hero) */}
          <div className="pb-10 md:pb-12 flex justify-center">
            <button
              type="button"
              onClick={handleScrollCue}
              className="group inline-flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
              aria-label="Scroll to see how it works"
            >
              <span className="text-sm font-medium">See how it works</span>

              <motion.div
                aria-hidden
                animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-white/25 group-hover:bg-white/10 transition-colors"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* BELOW THE FOLD DIVIDER */}
        <div className="pb-8 md:pb-10">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* STAGE SECTION (BELOW FOLD) */}
        <section id="attraction-engine" className="pb-14 md:pb-16 pt-7 md:pt-10">
          <motion.div
            className="text-center mb-6 sm:mb-7 md:mb-10"
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={heroItem}
              className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.05] md:leading-tight"
            >
              Instagram Attraction Engine
            </motion.h2>
            <motion.p variants={heroItem} className="mt-2 md:mt-3 text-white/70 text-sm sm:text-base md:text-lg">
              Attract → Nurture → Convert
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-4 md:gap-6"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="glass-purple rounded-xl md:rounded-2xl p-5 md:p-7 border border-white/10 hover:border-white/15 hover:-translate-y-[2px] transition-all cursor-pointer"
              >
                <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-white/35 to-white/0 mb-4 md:mb-5" />
                <p className="text-white/70 text-xs sm:text-sm mb-1">{card.subtitle}</p>
                <p className="text-2xl md:text-3xl font-black text-white">{card.price}</p>
                <p className="text-white/70 md:text-white/75 text-sm mt-2 md:mt-3 leading-snug md:leading-relaxed">
                  {card.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default HeroAndStages;
