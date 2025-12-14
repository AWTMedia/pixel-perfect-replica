import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "We finally stopped ‘posting to post’. The profile funnel + weekly structure made DMs predictable — and bookings followed.",
      author: "Gym Owner",
      verified: true,
    },
    {
      text: "The DM flow changed everything. Enquiries became qualified conversations, and we started tracking what actually converts.",
      author: "Clinic Founder",
      verified: true,
    },
  ];

  const ratingInfo = {
    title: "Built for physical businesses",
    description:
      "We build Attraction Engines that turn Instagram attention into qualified DMs, bookings, and clients — with a system you can repeat weekly.",
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Businesses are <span className="text-primary">getting attractive</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don’t just take our word for it — here’s what happens when you stop random posting
          and install an Attraction Engine.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-4">{testimonial.text}</p>

              <p className="text-muted-foreground text-sm">
                {testimonial.author} {testimonial.verified && "✓"}
              </p>
            </div>
          ))}

          {/* 3rd card: text must be white */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl mb-2">{ratingInfo.title}</h3>
            <p className="text-white/80 text-sm">{ratingInfo.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
