import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const HeroAndStages = () => {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title:
        "We rebuild your profile funnel + content structure so the right people want to DM you.",
      subtitle: "Stage 1",
      price: "Attract",
    },
    {
      title:
        "We install stories + DM touchpoints that build trust and move people forward.",
      subtitle: "Stage 2",
      price: "Nurture",
    },
    {
      title:
        "We create the path from view → DM → booking → sale, with scripts and tracking.",
      subtitle: "Stage 3",
      price: "Convert",
    },
  ];

  const heroContainer = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const heroItem = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 14, filter: "blur(6px)" as any },
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
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const cardItem = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 12, scale: 0.98, filter: "blur(6px)" as any },
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

  return (
    <section className="relative overflow-hidden aa-bg pt-24 md:pt-28 pb-14 md:pb-16">
      {/* Subtle depth layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left glow (headline) */}
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
        {/* Grain/noise */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative">
        {/* HERO */}
        <motion.div
          className="max-w-3xl"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={heroItem}
            className="text-5xl md:text-7xl font-black text-white leading-[1.02] mb-6"
          >
            Turn Instagram into clients for your physical business.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-white/80 text-lg md:text-xl mb-7"
          >
            We build Attraction Engines that convert random posting into DMs, bookings,
            and sales — without posting more for the sake of it.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              className="shadow-[0_18px_50px_rgba(11,15,25,0.45)] hover:shadow-[0_22px_65px_rgba(157,75,255,0.22)] hover:-translate-y-[1px] transition-all"
            >
              Get Attractive
            </Button>

            <a
              href="#"
              className="text-white/75 hover:text-white transition-colors text-sm font-medium"
            >
              Or DM “ATTRACT” on Instagram →
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex items-center gap-2 mt-7"
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

        {/* Divider / transition into Stage section */}
        <div className="mt-12 md:mt-14">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* STAGE SECTION */}
        <div className="pt-12 md:pt-14">
          <motion.div
            className="text-center mb-10 md:mb-12"
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={heroItem}
              className="text-3xl md:text-5xl font-black text-white tracking-tight"
            >
              Instagram Attraction Engine
            </motion.h2>
            <motion.p
              variants={heroItem}
              className="mt-3 text-white/70 text-base md:text-lg"
            >
              Attract → Nurture → Convert
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="glass-purple rounded-2xl p-7 border border-white/10 hover:border-white/15 hover:-translate-y-[2px] transition-all cursor-pointer"
              >
                {/* subtle top highlight */}
                <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-white/35 to-white/0 mb-5" />

                <p className="text-white/70 text-sm mb-1">{card.subtitle}</p>
                <p className="text-3xl font-black text-white">{card.price}</p>
                <p className="text-white/75 text-sm mt-3 leading-relaxed">
                  {card.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAndStages;
