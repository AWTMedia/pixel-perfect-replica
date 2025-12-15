import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text:
        "We finally stopped ‘posting to post’. The profile funnel + weekly structure made DMs predictable — and bookings followed.",
      author: "Gym Owner",
      verified: true,
    },
    {
      text:
        "The DM flow changed everything. Enquiries became qualified conversations, and we started tracking what actually converts.",
      author: "Clinic Founder",
      verified: true,
    },
  ];

  const ratingInfo = {
    title: "Built for physical businesses",
    description:
      "We turn Instagram attention into qualified DMs, bookings, and clients — with a repeatable weekly system.",
  };

  // -----------------------------
  // Motion variants
  // -----------------------------
  const sectionIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const headlineItem = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: i * 0.08 },
    }),
  };

  const subheadIn = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.18 },
    },
  };

  const gridStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const starsPop = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut", delay: 0.12 },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      variants={sectionIn}
      initial="hidden"
      whileInView="show"
      // later trigger on scroll (was 0.3)
      viewport={{ once: true, amount: 0.45 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            <motion.span
              className="inline-block"
              variants={headlineItem}
              custom={0}
            >
              Businesses are{" "}
            </motion.span>
            <motion.span
              className="inline-block text-primary"
              variants={headlineItem}
              custom={1}
            >
              {" "}Getting Attractive
            </motion.span>
          </h2>

          <motion.p
            className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={subheadIn}
          >
            Don’t just take our word for it — here’s what happens when you stop random posting
            and install an Attraction Engine.
          </motion.p>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-6" variants={gridStagger}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardIn}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="h-full rounded-2xl p-6 bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div className="flex items-center gap-1 mb-4" variants={starsPop}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </motion.div>

              <p className="text-foreground leading-relaxed">{testimonial.text}</p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span>{testimonial.author}</span>
                {testimonial.verified && (
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Third card: premium “highlight” but still white-section friendly */}
          <motion.div
            variants={cardIn}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="h-full rounded-2xl p-6 border border-primary/20 bg-primary/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-primary mb-3">Why this works</p>
              <h3 className="text-foreground font-black text-xl mb-3">{ratingInfo.title}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{ratingInfo.description}</p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <motion.div className="flex" variants={starsPop}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </motion.div>
              <span className="text-sm text-muted-foreground">Results-focused systems</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
