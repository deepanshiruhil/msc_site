import HeroSection from "@/components/sections/HeroSection";
import GallerySection from "@/components/sections/GallerySection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Divider between hero and gallery */}
      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />

      <GallerySection />

      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />

      <SponsorsSection />

      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />

      <FAQSection />
    </>
  );
}
