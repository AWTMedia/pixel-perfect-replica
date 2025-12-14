import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="text-2xl font-bold text-white">
          Attract Acquisition
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/90 font-medium hover:text-white hover:opacity-80 transition-opacity">
            Products
          </a>
          <a href="#" className="text-white/90 font-medium hover:text-white hover:opacity-80 transition-opacity">
            About us
          </a>
          <a href="#" className="text-white/90 font-medium hover:text-white hover:opacity-80 transition-opacity">
            Blog
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="dark" size="sm">
            Get Attractive
          </Button>

          <a
            href="#"
            className="text-white/90 font-medium hover:text-white hover:opacity-80 transition-opacity hidden md:block"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
