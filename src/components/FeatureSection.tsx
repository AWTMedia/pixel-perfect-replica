import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowDown } from "lucide-react";

const METRICS = [
  { value: "32,637", label: "Profile Visits", sub: "14.15% conversion" },
  { value: "4,618", label: "Followers", sub: "49.63% conversion" },
  { value: "2,292", label: "Qualified Followers", sub: "68.78% conversion" },
  { value: "1,576", label: "Conversations", sub: "DMs started" },
  { value: "134", label: "Appointments", sub: "81.34% conversion" },
  { value: "109", label: "Show Ups", sub: "Attendance" },
  { value: "$241,670", label: "Cash Collected", sub: "Revenue tracked" },
];

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

// Speed-up helper: completes animation earlier in the section
function useSpedProgress(progress: MotionValue<number>, speed: number) {
  return useTransform(progress, (v) => clamp01(v * speed));
}

function useStageAnim(progress: MotionValue<number>, i: number) {
  const total = 3;
  const start = i / total;
  const mid = start + 0.18;
  const end = start + 0.33;

  const y = useTransform(progress, [start, mid], [14, 0]);
  const opacity = useTransform(progress, [start, mid], [0.45, 1]);
  const scale = useTransform(progress, [start, mid], [0.985, 1]);

  // subtle “active” emphasis that follows the current stage band
  const glow = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

  return { y, opacity, scale, glow };
}

type MetricRowProps = {
  m: (typeof METRICS)[number];
  idx: number;
  n: number;
  progress: MotionValue<number>;
  hoverCard: string;
};

function MetricRow({ m, idx, n, progress, hoverCard }: MetricRowProps) {
  const start = idx / n;
  const end = Math.min(1, start + 0.22);

  const x = useTransform(progress, [start, end], [42, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const scale = useTransform(progress, [start, end], [0.985, 1]);

  return (
    <motion.div
      className={[
        // Mobile: tighter + stacked content for 2-col grid
        "glass-purple rounded-2xl border border-white/10",
        "p-3 md:p-4",
        "flex flex-col md:flex-row md:items-center md:justify-between",
        "gap-2 md:gap-4",
        hoverCard,
      ].join(" ")}
      style={{ x, opacity, scale }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="min-w-0">
        <p className="text-white text-[18px] md:text-xl font-black leading-none truncate">{m.value}</p>
        <p className="text-white/80 text-[11px] md:text-[11px] mt-2 leading-snug truncate">{m.label}</p>
      </div>

      {/* Mobile: move the sub under content (avoid cramped right alignment) */}
      <p className="text-white/60 text-[10px] md:text-[10px] md:text-right md:whitespace-nowrap md:mt-0">
        {m.sub}
      </p>
    </motion.div>
  );
}

const FeatureSection = () => {
  const hoverCard = "hover:border-white/15 transition-all cursor-pointer";

  // Make animations complete earlier:
  // - Feature A (left stack): 1.4x sooner
  // - Feature B (right metrics): 1.8x sooner
  const ENGINE_SPEED = 1.4;
  const METRICS_SPEED = 1.8;

  // -----------------------------
  // Feature A (Engine) scroll-linked
  // -----------------------------
  const engineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: engineProgressRaw } = useScroll({
    target: engineRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const engineProgress = useSpedProgress(engineProgressRaw, ENGINE_SPEED);
  const pathScaleY = useTransform(engineProgress, [0, 1], [0, 1]);

  const s0 = useStageAnim(engineProgress, 0);
  const s1 = useStageAnim(engineProgress, 1);
  const s2 = useStageAnim(engineProgress, 2);

  // Right headline reveal (once, staggered)
  const headlineWrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const headlineLine = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  // -----------------------------
  // Feature B (Metrics) scroll storytelling
  // -----------------------------
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: metricsProgressRaw } = useScroll({
    target: metricsRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const metricsProgress = useSpedProgress(metricsProgressRaw, METRICS_SPEED);
  const stackParallaxY = useTransform(metricsProgress, [0, 1], [10, -10]);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        {/* WHITE section, PURPLE inner curved box */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aa-bg">
          {/* Depth layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
            <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
            <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
          </div>

          {/* Feature A: Engine */}
          <div ref={engineRef} className="relative px-6 md:px-12 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3-stage stack */}
              <div className="max-w-md mx-auto w-full">
                <div className="mb-4 text-center md:text-left">
                  <p className="text-white/70 text-sm font-medium">3-stage flow</p>
                  <p className="text-white text-lg font-bold">The engine</p>
                </div>

                <div className="relative">
                  {/* Vertical path (draw on scroll) */}
                  <div className="absolute left-[18px] top-6 bottom-6 w-px bg-white/15 overflow-hidden">
                    <motion.div className="absolute inset-0 bg-white/55 origin-top" style={{ scaleY: pathScaleY }} />
                  </div>

                  {/* Stage 1 */}
                  <div className="relative pl-12">
                    <motion.div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                      style={{ y: s0.y, opacity: s0.opacity, scale: s0.scale }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <motion.div
                        className="pointer-events-none absolute -inset-[1px] rounded-2xl"
                        style={{
                          opacity: s0.glow,
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.14), 0 20px 60px rgba(0,0,0,0.25)",
                        }}
                      />
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">Stage 1</p>
                      <p className="text-3xl font-black text-white">Attract</p>
                      <p className="text-white/75 text-sm mt-2">Profile + content structure</p>
                    </motion.div>

                    <div className="absolute left-[18px] -bottom-5 -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative pl-12 mt-10">
                    <motion.div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                      style={{ y: s1.y, opacity: s1.opacity, scale: s1.scale }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <motion.div
                        className="pointer-events-none absolute -inset-[1px] rounded-2xl"
                        style={{
                          opacity: s1.glow,
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.14), 0 20px 60px rgba(0,0,0,0.25)",
                        }}
                      />
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">Stage 2</p>
                      <p className="text-3xl font-black text-white">Nurture</p>
                      <p className="text-white/75 text-sm mt-2">Stories + DM touchpoints</p>
                    </motion.div>

                    <div className="absolute left-[18px] -bottom-5 -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative pl-12 mt-10">
                    <motion.div
                      className={`glass-purple rounded-2xl p-6 border border-white/10 ${hoverCard}`}
                      style={{ y: s2.y, opacity: s2.opacity, scale: s2.scale }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <motion.div
                        className="pointer-events-none absolute -inset-[1px] rounded-2xl"
                        style={{
                          opacity: s2.glow,
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.14), 0 20px 60px rgba(0,0,0,0.25)",
                        }}
                      />
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">Stage 3</p>
                      <p className="text-3xl font-black text-white">Convert</p>
                      <p className="text-white/75 text-sm mt-2">DM → booking → sale</p>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-6 text-center md:text-left">
                  <a
                    href="#"
                    className="text-white/85 hover:text-white font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    See the engine in action <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* Feature A copy */}
              <div className="text-white text-center md:text-left">
                <motion.div variants={headlineWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
                  <h2 className="text-[clamp(38px,9vw,56px)] md:text-5xl font-black mb-5 md:mb-6 leading-[1.02] md:leading-tight">
                    <motion.span variants={headlineLine} className="block">
                      Build a system
                    </motion.span>
                    <motion.span variants={headlineLine} className="block text-white/70">
                      not just content
                    </motion.span>
                    <motion.span variants={headlineLine} className="block">
                      that gets clients
                    </motion.span>
                  </h2>
                </motion.div>

                <motion.p
                  className="text-white/85 text-base md:text-lg leading-relaxed max-w-[44ch] md:max-w-xl mx-auto md:mx-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                >
                  Most agencies add volume. We build the infrastructure behind your content: profile funnel, weekly content
                  structure, and a DM → booking flow — so Instagram becomes predictable.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px bg-white/12" />

          {/* Feature B: Metrics */}
          <div ref={metricsRef} className="relative px-6 md:px-12 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* left copy (fade-up once) */}
              <motion.div
                className="order-2 md:order-1 text-white text-center md:text-left"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h2 className="text-[clamp(38px,9vw,56px)] md:text-5xl font-black mb-5 md:mb-6 leading-[1.02] md:leading-tight">
                  Know what’s working
                  <br />
                  <span className="text-white/70">in real time</span>
                  <br />
                  and scale it
                </h2>

                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-[44ch] md:max-w-xl mx-auto md:mx-0">
                  We add tracking and a simple pipeline so you can see what turns into DMs, bookings, and clients — then
                  double down on what’s proven.
                </p>
              </motion.div>

              {/* right metrics (scroll-stagger by progress) */}
              {/* Mobile-only improvements:
                  - 2-column grid to reduce scroll fatigue
                  - extra top padding so floating CTA doesn't cover the first row
                  - denser cards + stacked layout so each card reads clean in 2 cols
              */}
              <motion.div
                className="order-1 md:order-2 max-w-md mx-auto w-full pt-14 md:pt-0"
                style={{ y: stackParallaxY }}
              >
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  {METRICS.map((m, idx) => (
                    <MetricRow key={m.label} m={m} idx={idx} n={METRICS.length} progress={metricsProgress} hoverCard={hoverCard} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* bottom depth */}
          <div className="relative h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
