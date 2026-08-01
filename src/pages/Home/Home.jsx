import React from "react";
import Hero from "../../components/home/Hero";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import LatestSkills from "../../components/home/LatestSkills";
import HowItWorks from "../../components/home/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <LatestSkills />
      <HowItWorks />
    </>
  );
};

export default Home;