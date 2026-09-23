"use client";

import { useState } from "react";

import CategoriesHero from "./CategoriesHero";
import CategorySearch from "./CategorySearch";
import ExperienceCategories from "./ExperienceCategories";
import TravelMoods from "./TravelMoods";
import PopularCategories from "./PopularCategories";
import CategoriesCTA from "./CategoriesCTA";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <CategoriesHero />
      <CategorySearch onSearch={setSearchQuery} />
      <ExperienceCategories searchQuery={searchQuery} />
      <TravelMoods />
      <PopularCategories />
      <CategoriesCTA />
    </main>
  );
}