import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Workflow, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const depthLayers = (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
    <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
    <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// -----------------------------
// Scroll-storytelling helpers (like Features metrics)
// -----------------------------
function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function useSpedProgress(progress: MotionValue<number>, speed: number) {
  return useTransform(progress, (v) => clamp01(v * speed));
}

function PillScrollStack({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: raw } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });

  // Finish earlier so it's “done” by mid-section
  const progress = useSpedProgress(raw, 1.6);
  const parallaxY = useTransform(progress, [0, 1], [10, -10]);

  return (
    <motion.div ref={ref} className="grid gap-3" style={{ y: parallaxY }}>
      {items.map((text, idx) => {
        const n = items.length;
        const start = idx / n;
        const end = Math.min(1, start + 0.22);

        const x = useTransform(progress, [start, end], [42, 0]);
        const opacity = useTransform(progress, [start, end], [0, 1]);
        const scale = useTransform(progress, [start, end], [0.985, 1]);

        return (
          <motion.div
            key={text}
            className="bg-background rounded-2xl p-4 border border-border/60 flex items-center gap-3"
            style={{ x, opacity, scale }}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-foreground/85 font-medium">{text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

const AboutPage = () => {
  const principles = [
    {
      icon: Workflow,
      title: "Systems > random posting",
      desc: "We build a weekly machine, not a content dump.",
    },
    { icon: Target, title: "Pipeline > likes", desc: "DMs, bookings, and clients — tracked." },
    { icon: Sparkles, title: "Proof > promises", desc: "Simple infrastructure that compounds." },
  ];

  const story = [
    {
      title: "The problem",
      desc: "Most physical businesses post without a pipeline. Attention comes in — but nothing converts consistently.",
    },
    {
      title: "The insight",
      desc: "When you install a profile funnel + weekly structure + DM flow, Instagram becomes predictable.",
    },
    {
      title: "The result",
      desc: "Track what converts, double down on what’s proven, and grow without guessing.",
    },
  ];

  const pillars = [
    "Attention is useless without conversion",
    "Content is a tool, not the product",
    "Weekly systems compound",
    "DMs are a pipeline",
    "Track what converts",
  ];

  const expectations = [
    "A clear weekly plan (not chaos)",
    "A profile funnel that directs action",
    "A DM flow that qualifies and books",
    "Simple tracking to see what’s working",
    "Iteration every week (the compounding loop)",
  ];

  return (
    <PageLayout>
      <div className="bg-background">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={stagger}
              >
                <motion.p variants={fadeUp} className="text-sm font-semibold text-muted-foreground">
                  About Attract Acquisition
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="mt-3 text-4xl md:text-5xl font-black leading-tight text-foreground"
                >
                  We build infrastructure,
                  <br />
                  <span className="text-primary">not content.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl"
                >
                  Physical businesses don’t need more posts — they need a repeatable system that turns
                  attention into qualified DMs, bookings, and clients.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/services" aria-label="View services">
                      View services <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                    Or DM “ATTRACT” on Instagram
                  </a>
                </motion.div>
              </motion.div>

              {/* Principles stack */}
              <motion.div
                className="max-w-xl mx-auto w-full"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={stagger}
              >
                <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg relative">
                  {depthLayers}
                  <div className="relative p-6 md:p-8">
                    <p className="text-white/70 text-sm font-semibold">How we think</p>
                    <h2 className="text-white text-2xl md:text-3xl font-black mt-1">The principles</h2>

                    <div className="mt-6 grid gap-4">
                      {principles.map((p) => {
                        const Icon = p.icon;
                        return (
                          <motion.div
                            key={p.title}
                            variants={fadeUp}
                            className="glass-purple rounded-2xl p-5 border border-white/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-white/85" />
                              </div>
                              <div>
                                <p className="text-white font-black">{p.title}</p>
                                <p className="text-white/70 text-sm mt-1 leading-relaxed">{p.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                Why this exists
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-foreground/70 leading-relaxed">
                A short story — in three steps.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {story.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm"
                >
                  <p className="text-sm font-semibold text-primary">{s.title}</p>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={stagger}
              >
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                  What we believe
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  This is the mindset behind every build. Simple, repeatable, measurable.
                </motion.p>
              </motion.div>

              {/* Right side scroll-storytelling pills */}
              <PillScrollStack items={pillars} />
            </div>
          </div>
        </section>

        {/* METHOD (mini engine) */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg relative">
              {depthLayers}
              <div className="relative px-6 md:px-12 py-14 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                  >
                    <motion.p variants={fadeUp} className="text-white/70 text-sm font-semibold">
                      The method
                    </motion.p>
                    <motion.h2
                      variants={fadeUp}
                      className="mt-2 text-4xl md:text-5xl font-black text-white leading-tight"
                    >
                      The Attraction Engine
                    </motion.h2>
                    <motion.p
                      variants={fadeUp}
                      className="mt-4 text-white/80 text-lg leading-relaxed max-w-xl"
                    >
                      A simple 3-stage system that turns attention into clients — every week.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="grid gap-4 max-w-xl mx-auto w-full"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                  >
                    {[
                      { t: "Attract", d: "Profile funnel + content structure" },
                      { t: "Nurture", d: "Stories + DM touchpoints" },
                      { t: "Convert", d: "DM → booking → sale" },
                    ].map((x) => (
                      <motion.div
                        key={x.t}
                        variants={fadeUp}
                        className="glass-purple rounded-2xl p-6 border border-white/10"
                      >
                        <p className="text-white text-2xl font-black">{x.t}</p>
                        <p className="text-white/70 text-sm mt-2">{x.d}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPECTATIONS */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                What you can expect
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-foreground/70 leading-relaxed">
                No fluff. No “posting to post”. Just a clear system and weekly compounding improvements.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-10 grid md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {expectations.map((e) => (
                <motion.div
                  key={e}
                  variants={fadeUp}
                  className="bg-background rounded-2xl p-5 border border-border/60"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-foreground/85 font-medium leading-relaxed">{e}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Button variant="hero" size="lg" asChild>
                  <a href="/services" aria-label="View services">
                    See services
                  </a>
                </Button>
              </motion.div>

              <motion.a
                variants={fadeUp}
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Or DM “ATTRACT” on Instagram
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
