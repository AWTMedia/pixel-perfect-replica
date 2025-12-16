import { Facebook, Linkedin, Twitter, Instagram, Video } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks: Record<string, { label: string; href: string }[]> = {
    Resources: [
      { label: "Help Centre", href: "/#get-attractive" },
      { label: "Contact Us", href: "/#get-attractive" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Legal: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "POPIA", href: "/popia" },
      { label: "Complaints", href: "/complaints" },
    ],
  };

  const socials = [
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "X", href: "#", icon: Twitter },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "TikTok", href: "#", icon: Video },
  ];

  const handleHashNav = (href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <footer className="relative overflow-hidden aa-bg text-white py-10 md:py-16">
      {/* Hero-style depth layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative">
        {/* MOBILE: tighter, centered, 2-col link grid */}
        <div className="mb-10 md:mb-12">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl md:text-2xl font-black mb-2 text-white">Attract Acquisition</h3>
            </Link>
            <p className="text-white/75 max-w-[32ch] mx-auto md:mx-0 text-base md:text-sm">
              Building Attraction Engines for Physical Businesses.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-center md:text-left">
                <h4 className="font-semibold mb-3 text-white/85">{category}</h4>

                {/* mobile: 2 columns so it doesn’t feel endlessly tall */}
                <ul className="space-y-2 md:space-y-2 grid grid-cols-2 gap-x-4 gap-y-2 md:block">
                  {links.map((l) => {
                    const isHash = l.href.startsWith("/#");
                    const isInternal = l.href.startsWith("/") && !isHash && l.href !== "/";

                    const base =
                      "text-white/75 hover:text-white transition-colors text-sm";
                    const mobileCenter = "justify-self-center md:justify-self-auto";

                    return (
                      <li key={l.label} className={mobileCenter}>
                        {isHash ? (
                          <button
                            type="button"
                            onClick={() => handleHashNav(l.href)}
                            className={`${base} text-center md:text-left`}
                          >
                            {l.label}
                          </button>
                        ) : isInternal ? (
                          <Link to={l.href} className={`${base} text-center md:text-left`}>
                            {l.label}
                          </Link>
                        ) : (
                          <a href={l.href} className={`${base} text-center md:text-left`}>
                            {l.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 pt-7 md:pt-8 flex flex-col items-center justify-center gap-4">
          {/* mobile: larger tap targets */}
          <div className="flex items-center justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/85 hover:text-white transition-colors p-3 rounded-full bg-white/0 hover:bg-white/10"
              >
                <Icon className="w-6 h-6 md:w-5 md:h-5" />
              </a>
            ))}
          </div>

          <div className="text-center text-white/65 text-xs">
            <p>© 2025 Attract Acquisition. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
