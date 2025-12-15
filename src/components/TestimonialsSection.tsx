import { Star, BadgeCheck } from "lucide-react";

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

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Businesses are <span className="text-primary">Getting Attractive</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don’t just take our word for it — here’s what happens when you stop random posting
            and install an Attraction Engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-full rounded-2xl p-6 bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">
                {testimonial.text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span>{testimonial.author}</span>
                {testimonial.verified && (
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Third card: premium “highlight” but still white-section friendly */}
          <div className="h-full rounded-2xl p-6 border border-primary/20 bg-primary/5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-primary mb-3">Why this works</p>
              <h3 className="text-foreground font-black text-xl mb-3">
                {ratingInfo.title}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {ratingInfo.description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Results-focused systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
