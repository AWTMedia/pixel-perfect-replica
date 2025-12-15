import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [minimized, setMinimized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setMinimized(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToGetAttractive = () => {
    const id = "get-attractive";

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

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
          <div className="glass-purple-strong rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between border border-white/10">
            <Link to="/" className="text-xl md:text-2xl font-bold text-white">
              Attract Acquisition
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/services"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                Service
              </Link>
              <Link
                to="/about"
                className="text-white/80 font-medium hover:text-white transition-colors"
              >
                About us
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="dark" size="sm" onClick={goToGetAttractive}>
                Get Attractive
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
          <Button variant="dark" size="sm" onClick={goToGetAttractive}>
            Get Attractive
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
