import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, CalendarClock, Wrench, Rocket, Repeat, ChevronRight } from "lucide-react";
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

const ServicesPage = () => {
  const deliverables = [
    { title: "Profile funnel rebuild", desc: "Bio, highlights, pinned posts — engineered for action." },
    { title: "Weekly content structure", desc: "A repeatable plan that compounds (not random posting)." },
    { title: "DM → booking flow", desc: "Qualified conversations → appointments → clients." },
    { title: "Scripts + prompts", desc: "Message templates for replies, follow-ups, and booking." },
    { title: "Tracking + pipeline", desc: "See what turns into DMs, bookings, and revenue." },
    { title: "Iteration loop", desc: "Weekly review → what’s working → scale it." },
  ];

  const steps = [
    { icon: CalendarClock, title: "Audit (24h)", desc: "Clear fixes + the conversion plan." },
    { icon: Wrench, title: "Build (days)", desc: "Profile funnel + system installed." },
    { icon: Rocket, title: "Launch (week 1)", desc: "Execute the weekly structure + DM flow." },
    { icon: Repeat, title: "Iterate (weekly)", desc: "Track → improve → compound." },
  ];

  const forWho = ["Gyms & studios", "Clinics & practices", "Salons & aesthetics", "Home services", "Local brands", "Physical businesses with capacity"];
  const notFor = ["People who want “viral only”", "No capacity to take leads", "No offer / no pricing clarity", "Unwilling to execute weekly"];

  const faqs = [
    {
      q: "What exactly do you build?",
      a: "We build the engine: profile funnel, weekly content structure, DM → booking flow, and tracking so you can double down on what converts.",
    },
    {
      q: "Is this done-for-you?",
      a: "It can be done-with-you (you post) or supported execution — depends on your setup. The system is the core.",
    },
    {
      q: "How fast can this be installed?",
      a: "Most businesses can have the engine installed in days, then improved weekly.",
    },
    {
      q: "Do you guarantee results?",
      a: "We guarantee the engine build. Outcomes depend on offer, location, pricing, and execution — but the system makes results repeatable.",
    },
  ];

  return (
    <PageLayout>
      <div className="bg-background">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
                <motion.p variants={fadeUp} className="text-sm font-semibold text-muted-foreground">
                  Services
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="mt-3 text-4xl md:text-5xl font-black leading-tight text-foreground"
                >
                  Install your
                  <br />
                  <span className="text-primary">Attraction Engine.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  We turn Instagram attention into qualified DMs, bookings, and clients — with a repeatable weekly system.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#book" aria-label="Book a call">
                      Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                    Or DM “ATTRACT” on Instagram
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/60">
                  <span>Installed in days</span>
                  <span>•</span>
                  <span>Improved weekly</span>
                  <span>•</span>
                  <span>Results-focused</span>
                </motion.div>
              </motion.div>

              {/* Purple engine preview */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={stagger}
                className="max-w-xl mx-auto w-full"
              >
                <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg relative">
                  {depthLayers}
                  <div className="relative p-6 md:p-8">
                    <p className="text-white/70 text-sm font-semibold">3-stage flow</p>
                    <h2 className="text-white text-2xl md:text-3xl font-black mt-1">The engine</h2>

                    <div className="mt-6 grid gap-4">
                      {[
                        { t: "Attract", d: "Profile funnel + content structure" },
                        { t: "Nurture", d: "Stories + DM touchpoints" },
                        { t: "Convert", d: "DM → booking → sale" },
                      ].map((x) => (
                        <motion.div key={x.t} variants={fadeUp} className="glass-purple rounded-2xl p-6 border border-white/10">
                          <p className="text-white text-2xl font-black">{x.t}</p>
                          <p className="text-white/70 text-sm mt-2">{x.d}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground text-center">
                What you get
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-center text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Concrete deliverables that build a predictable acquisition channel.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {deliverables.map((d) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-foreground font-black">{d.title}</p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                How it works
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-muted-foreground leading-relaxed">
                Four steps. Clear momentum. Weekly compounding improvements.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm"
                    whileHover={{ y: -4 }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 text-foreground font-black">{s.title}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                  Who this is for
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-foreground/70 leading-relaxed max-w-xl">
                  If you’re a physical business and you want Instagram to become predictable — this is built for you.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6 grid gap-3">
                  {forWho.map((x) => (
                    <div key={x} className="bg-background rounded-2xl p-4 border border-border/60 flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <p className="text-foreground/85 font-medium">{x}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
                <motion.h3 variants={fadeUp} className="text-2xl font-black text-foreground">
                  Not for
                </motion.h3>
                <motion.p variants={fadeUp} className="mt-3 text-foreground/70 leading-relaxed max-w-xl">
                  This only works if you can take leads and execute weekly.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6 grid gap-3">
                  {notFor.map((x) => (
                    <div key={x} className="bg-background rounded-2xl p-4 border border-border/60 flex items-center gap-3">
                      <X className="h-5 w-5 text-foreground/50" />
                      <p className="text-foreground/80 font-medium">{x}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="text-center">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                FAQ
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Quick answers before you book.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 grid md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {faqs.map((f) => (
                <motion.div
                  key={f.q}
                  variants={fadeUp}
                  className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-foreground font-black leading-snug">{f.q}</p>
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="book" className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg relative">
              {depthLayers}
              <div className="relative px-6 md:px-12 py-14 md:py-16 text-center">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
                  <motion.p variants={fadeUp} className="text-white/70 font-semibold">
                    Get Attractive™
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="mt-2 text-4xl md:text-5xl font-black text-white">
                    It starts with a call.
                  </motion.h2>
                  <motion.p variants={fadeUp} className="mt-4 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                    Book a 15-minute call and we’ll map your Attraction Engine — profile funnel, content structure,
                    and the DM → booking flow for your business.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button variant="hero" size="lg" asChild>
                        <a href="#" aria-label="Book a call">
                          Book a Call
                        </a>
                      </Button>
                    </motion.div>

                    <a href="#" className="text-white/85 hover:text-white transition-colors font-medium">
                      Or DM “ATTRACT” on Instagram
                    </a>
                  </motion.div>

                  <motion.p variants={fadeUp} className="mt-5 text-white/60 text-sm">
                    15 minutes • Free • Clear next step
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
