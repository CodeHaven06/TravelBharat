import RajasthanHero from "./RajasthanHero";
import RajasthanAbout from "./RajasthanAbout";
import RajasthanDestinations from "./RajasthanDestinations";
import RajasthanInfo from "./RajasthanInfo";
import RajasthanReasons from "./RajasthanReasons";
import RajasthanCuisine from "./RajasthanCuisine";
import RajasthanTips from "./RajasthanTips";
import RajasthanCTA from "./RajasthanCTA";


export default function RajasthanPage() {
  return (
    <main>
      <RajasthanHero />
      <RajasthanAbout />
      <RajasthanDestinations />
      <RajasthanInfo />
      <RajasthanReasons />
      <RajasthanCuisine />
      <RajasthanTips />
      <RajasthanCTA />
    </main>
  );
}