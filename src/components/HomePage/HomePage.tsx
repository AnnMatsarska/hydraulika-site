"use client";
import React from "react";
import { Hero } from "./Hero";
import ONas from "./ONas/ONas";
import Oferta from "./Oferta/Oferta";
import Advantages from "./Advantages/Advantages";
import LocationSection from "./LocationSection/LocationSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ONas />
      <Oferta />
      <Advantages />
      <LocationSection />
    </>
  );
};

export default HomePage;
