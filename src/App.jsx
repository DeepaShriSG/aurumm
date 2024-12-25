import { useState } from "react";
import HeroSection from "../src/components/HeroSection"
import JewelleryBuisness from "./common/JewelleryBuisness"
import FeaturedApps from "./components/FeaturedApps"
import AurummGrowth from "./components/AurummGrowth"
import ProductCard from "./common/ProductCard"
import JewelleryManagement from "./components/JewelleryManagement"
import CardsBanner from "./components/CardsBanner"
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
     <HeroSection/>
     <JewelleryBuisness/>
     <FeaturedApps/>
     <AurummGrowth/>
     <ProductCard/>
     <JewelleryManagement/>
      <CardsBanner/> 
      <Footer/>
    </>
  );
}

export default App;
