import { motion, useReducedMotion, type Variants } from "framer-motion";

type Dir = "up" | "left" | "right";

const makeVariants = (from: Dir, reduce: boolean): Variants => {
  const dist = reduce ? 0 : 28;
  const hidden =
    from === "left"
      ? { opacity: 0, x: -dist }
      : from === "right"
      ? { opacity: 0, x: dist }
      : { opacity: 0, y: dist };

  return {
    hidden,
    show: { opacity: 1, x: 0, y: 0 },
  };
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  from?: Dir;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={makeVariants(from, !!reduce)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
