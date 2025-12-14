import phoneMockup3 from "@/assets/phone-mockup-3.png";

const AppSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              It all happens<br />
              <span className="text-primary">on the app</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Download the app and join hundreds of happy members 
              who manage their insurance on the go.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-dark text-dark-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-xl">▶</span>
                <div>
                  <p className="text-[10px] opacity-70">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
              <a href="#" className="bg-dark text-dark-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-xl">🍎</span>
                <div>
                  <p className="text-[10px] opacity-70">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            <img 
              src={phoneMockup3} 
              alt="Naked app" 
              className="w-64 md:w-80"
            />
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-3">SCAN TO DOWNLOAD THE</p>
              <p className="font-bold text-lg mb-4">Naked App</p>
              <div className="w-32 h-32 bg-foreground rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-2">
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 ${Math.random() > 0.5 ? 'bg-background' : 'bg-foreground'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
