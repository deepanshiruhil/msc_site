import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />
      <GallerySection />
      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />
      <SponsorsSection />
      <div className="divider" style={{ maxWidth: "80%", margin: "0 auto" }} />
      <FAQSection />
    </>
  );
}
