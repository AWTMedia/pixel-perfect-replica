const PricingCards = () => {
  const cards = [
    {
      title: "We rebuild your profile funnel + content structure so the right people want to DM you.",
      subtitle: "Stage 1",
      price: "Attract",
    },
    {
      title: "We install stories + DM touchpoints that build trust and move people forward.",
      subtitle: "Stage 2",
      price: "Nurture",
    },
    {
      title: "We create the path from view → DM → booking → sale, with scripts and tracking.",
      subtitle: "Stage 3",
      price: "Convert",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          The 3 Stage
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-center text-white/90 mb-10 md:mb-12">
          Instagram Attraction Engine
        </p>

        {/* MOBILE: horizontal scroll / DESKTOP: 3-column grid */}
        <div className="md:hidden">
          <div
            className="
              flex gap-4 overflow-x-auto pb-3
              snap-x snap-mandatory
              [-webkit-overflow-scrolling:touch]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  glass-purple rounded-2xl p-6 cursor-pointer
                  min-w-[85%] sm:min-w-[70%]
                  snap-center
                  hover:translate-y-[-2px] transition-all
                "
              >
                <p className="text-white/70 text-sm mb-1">{card.subtitle}</p>
                <p className="text-3xl font-bold text-white">{card.price}</p>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* Optional tiny hint */}
          <p className="text-center text-white/60 text-sm mt-3">Swipe →</p>
        </div>

        {/* DESKTOP/TABLET */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-purple rounded-2xl p-6 hover:translate-y-[-2px] transition-all cursor-pointer"
            >
              <p className="text-white/70 text-sm mb-1">{card.subtitle}</p>
              <p className="text-3xl font-bold text-white">{card.price}</p>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
