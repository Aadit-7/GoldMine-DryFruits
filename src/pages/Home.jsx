import PromoBar from "../components/layout/PromoBar";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import CategoryList from "../components/home/CategoryList";
import ProductSection from "../components/home/ProductSection";
import TrustSection from "../components/home/TustSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <PromoBar />

      <Navbar />

      <main>
        <Hero />

        <CategoryList />

        <ProductSection />

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
