import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [minimized, setMinimized] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";
  const isSubPage = !isLanding;

  useEffect(() => {
    const onScroll = () => setMinimized(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On subpages: make the pill more “solid” so it doesn’t wash out on white backgrounds
  const navPillClass = isSubPage
    ? "aa-bg border border-white/12 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
    : "glass-purple-strong border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)]";

  return (
    <>
      {/* FULL NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div
          className={[
            "container mx-auto py-4",
            "transition-all duration-300 ease-out",
            minimized
              ? "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
              : "opacity-100 translate-y-0 scale-100",
          ].join(" ")}
        >
          <div className={`rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between ${navPillClass}`}>
            {/* Clicking brand name -> back to landing page */}
            <Link to="/" className="text-xl md:text-2xl font-bold text-white">
              Attract Acquisition
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/services"
                className="text-white/85 font-medium hover:text-white transition-colors"
              >
                Service
              </Link>
              <Link
                to="/about"
                className="text-white/85 font-medium hover:text-white transition-colors"
              >
                About us
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="dark" size="sm" asChild>
                {/* keep hash jump */}
                <a href="/#get-attractive" aria-label="Get Attractive">
                  Get Attractive
                </a>
              </Button>

              <a
                href="#"
                className="hidden md:block text-white/80 font-medium hover:text-white transition-colors"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* MINIMIZED PILL (TOP-RIGHT) */}
      <div
        className={[
          "fixed top-4 right-4 z-50",
          "transition-all duration-300 ease-out",
          minimized
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="rounded-2xl px-5 md:px-6 py-3 bg-transparent">
          <Button variant="dark" size="sm" asChild>
            <a href="/#get-attractive" aria-label="Get Attractive">
              Get Attractive
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
