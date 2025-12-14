const Footer = () => {
  const footerLinks = {
    Cover: ["Car Insurance", "Home Insurance", "Buildings Insurance", "Single Item Insurance"],
    Resources: ["Help Centre", "Contact Us", "Claims"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    Legal: ["Terms of Use", "Privacy Policy", "POPIA", "Complaints"],
  };

  return (
    <footer className="bg-dark text-dark-foreground py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Naked</h3>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-dark-foreground/70">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-dark-foreground/60 hover:text-dark-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a href="#" className="bg-dark text-dark-foreground px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs border border-dark-foreground/20">
              <span>▶</span>
              <span>Google Play</span>
            </a>
            <a href="#" className="bg-dark text-dark-foreground px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs border border-dark-foreground/20">
              <span>🍎</span>
              <span>App Store</span>
            </a>
          </div>
          <div className="flex gap-6">
            {["f", "in", "X", "📸", "tiktok"].map((social) => (
              <a key={social} href="#" className="text-dark-foreground/60 hover:text-dark-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-dark-foreground/40 text-xs">
          <p>© 2024 Naked Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
