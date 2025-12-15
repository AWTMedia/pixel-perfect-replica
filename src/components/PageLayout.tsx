// src/components/PageLayout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { children: React.ReactNode };

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {/* push content below fixed navbar */}
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
