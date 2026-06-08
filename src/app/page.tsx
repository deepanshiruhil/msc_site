import HeroSection from "@/components/HeroSection";
import GoalsPage from "@/components/GoalsPage";
import AboutUs from "@/components/AboutUs";
import CircularGallery from "@/components/CircularGallery";
import RecentEvents from "@/components/RecentEvents";
import SponsorsGrid from "@/components/SponsorsGrid";
import FAQ from "@/components/FAQ";
import StillHaveQuestions from "@/components/StillHaveQuestions";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GoalsPage />
      <AboutUs />
      <CircularGallery />
      <RecentEvents />
      <SponsorsGrid />
      <FAQ />
      <StillHaveQuestions />
    </>
  );
}
