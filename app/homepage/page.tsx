import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ExploreIndia from "./ExploreIndia";
import FeaturedDestinations from "./FeaturedDestinations";
import PopularCategories from "./PopularCategories";
import TrendingStates from "./TrendingStates";
import TravelGallery from "./TravelGallery";
import HomeCTA from "./HomeCTA";

export default function Homepage() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <StatsSection />
      <ExploreIndia />
      <FeaturedDestinations />
      <PopularCategories />
      <TrendingStates />
      <TravelGallery />
      <HomeCTA />
    </main>
  );
}