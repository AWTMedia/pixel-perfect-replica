import { motion, useReducedMotion } from "framer-motion";

export default function Stagger({
  children,
  className = "",
  delayChildren = 0.05,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: reduce
            ? { delayChildren: 0, staggerChildren: 0 }
            : { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
