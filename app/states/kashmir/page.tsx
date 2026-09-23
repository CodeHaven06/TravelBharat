"use client";

import KashmirSnow from "./KashmirSnow";

import KashmirHero from "./KashmirHero";
import KashmirAbout from "./KashmirAbout";
import KashmirDestinations from "./KashmirDestinations";
import KashmirExperiences from "./KashmirExperiences";
import KashmirCulture from "./KashmirCulture";
import KashmirCuisine from "./KashmirCuisine";
import KashmirTips from "./KashmirTips";
import KashmirCTA from "./KashmirCTA";

export default function KashmirPage() {
  return (
    <main className="relative">
      <KashmirSnow />

      <KashmirHero />
      <KashmirAbout />
      <KashmirDestinations />
      <KashmirExperiences />
      <KashmirCulture />
      <KashmirCuisine />
      <KashmirTips />
      <KashmirCTA />
    </main>
  );
}