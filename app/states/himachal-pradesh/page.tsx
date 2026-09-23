import HimachalHero from "./HimachalHero";
import HimachalDiscover from "./HimachalDiscover";
import HimachalDestinations from "./HimachalDestinations";
import HimachalExperiences from "./HimachalExperiences";
import HimachalCulture from "./HimachalCulture ";
import HimachalCTA from "./HimachalCTA";
// import HimachalSeasons from "./HimachalSeasons";

export default function HimachalPage() {
  return (
    <main>
      <HimachalHero />
      <HimachalDiscover />
      <HimachalDestinations />
      <HimachalExperiences />
      <HimachalCulture />
      {/* <HimachalSeasons /> */}
      <HimachalCTA />
    </main>
  );
}