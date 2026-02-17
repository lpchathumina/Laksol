'use client';

import React from "react";
import Hero from "@/components/landing/hero";
import HomeProducts from "@/components/landing/homeproducts";
import AllProducts from "@/components/landing/allproducts";
import WhoWeAre from "@/components/landing/who";
import OurServices from "@/components/landing/our";
import Feedback from "@/components/layout/feedback";


export default function Home() {
  return (
    <main>
      <Hero /> 
      <HomeProducts />
      <AllProducts />
      <WhoWeAre />
      <OurServices />
      <Feedback />
    </main>
  );
}