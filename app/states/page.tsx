import StatesHero from "./StatesHero";
import StateSearch from "./StateSearch";
import PopularStates from "./PopularStates";
import StatesMap from "./StatesMap";
import StatesCTA from "./StatesCTA";

export default function StatesPage() {
  return (
    <main className="bg-white text-gray-900">
      <StatesHero />
      <StateSearch />
      <PopularStates />
      <StatesMap />
      <StatesCTA />
    </main>
  );
}


  

// import AllStates from "./AllStates";
//       <AllStates />
