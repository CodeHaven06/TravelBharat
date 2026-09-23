import KeralaHero from "./KeralaHero";
import KeralaAbout from "./KeralaAbout";
import KeralaDestinations from "./KeralaDestinations";
import KeralaExperiences from "./KeralaExperiences";
import KeralaCulture from "./KeralaCulture";
import KeralaCuisine from "./KeralaCuisine";
import KeralaTravelTips from "./KeralaTravelTips";
import KeralaCTA from "./KeralaCTA";

export default function KeralaPage() {
  return (
    <main>
      <KeralaHero />
      <KeralaAbout />
      <KeralaDestinations />
      <KeralaExperiences />
      <KeralaCulture />
      <KeralaCuisine />
      <KeralaTravelTips />
      <KeralaCTA />
    </main>
  );
}