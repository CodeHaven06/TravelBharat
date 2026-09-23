import GoaHero from "./GoaHero";
import GoaOverview from "./GoaOverview";
import GoaDestinations from "./GoaDestinations";
import GoaExperiences from "./GoaExperiences";
import GoaCulture from "./GoaCulture";
import GoaCuisine from "./GoaCuisine";
import GoaTravelTips from "./GoaTravelTips";
import GoaCTA from "./GoaCTA";

export default function GoaPage() {
  return (
    <main>
      <GoaHero />
      <GoaOverview />
      <GoaDestinations />
      <GoaExperiences />
      <GoaCulture />
      <GoaCuisine />
      <GoaTravelTips />
      <GoaCTA />
    </main>
  );
}