import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The simplest and quickest form of insurance I have ever had. No need for long phone calls to call centers...",
      author: "Chantal L",
      verified: true,
    },
    {
      text: "Signing up was a breeze. Then when I needed to claim, you wouldn't believe how fast and efficient...",
      author: "Pieter D",
      verified: true,
    },
  ];

  const ratingInfo = {
    title: "Rated in the Best",
    description: "Hello Peter's list of Best Car & Home Insurance companies for 2023.",
  };

  const appStores = [
    { name: "Google Play", rating: 4.7 },
    { name: "App Store", rating: 4.8 },
    { name: "AppGallery", rating: 4.4 },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          People are <span className="text-primary">loving Naked</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't just take our word for it — hear from our Happy customers
          <br />
          Naked is South Africa's most trusted insurance on app for their stuff.
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
          <div className="bg-primary rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-dark font-bold text-xl mb-2">{ratingInfo.title}</h3>
            <p className="text-dark/80 text-sm">{ratingInfo.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {appStores.map((store, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background text-xs font-bold">
                  {store.name === "Google Play" ? "▶" : store.name === "App Store" ? "🍎" : "📱"}
                </span>
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">{store.name}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-foreground text-foreground" />
                  ))}
                  <span className="text-muted-foreground text-xs ml-1">{store.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
