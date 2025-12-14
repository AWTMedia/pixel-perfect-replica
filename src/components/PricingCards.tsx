import { Car, Home, Smartphone } from "lucide-react";

const PricingCards = () => {
  const cards = [
    {
      title: "Car insurance",
      subtitle: "from",
      price: "R180pm",
      icon: Car,
      iconBg: "bg-primary",
    },
    {
      title: "Home insurance",
      subtitle: "from",
      price: "R43pm",
      icon: Home,
      iconBg: "bg-primary",
    },
    {
      title: "Single item insurance",
      subtitle: "from",
      price: "R15pm",
      icon: Smartphone,
      iconBg: "bg-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          100% digital insurance for all
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          your favourite things
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div>
                <p className="text-muted-foreground text-sm mb-1">{card.subtitle}</p>
                <p className="text-3xl font-bold text-foreground">{card.price}</p>
                <p className="text-muted-foreground text-sm mt-1">{card.title}</p>
              </div>
              <div className={`${card.iconBg} w-16 h-16 rounded-xl flex items-center justify-center`}>
                <card.icon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
