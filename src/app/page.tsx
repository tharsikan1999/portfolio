"use client";

import About from "@/components/About/About";
import HomePage from "@/components/Home/Home";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <LogoSlider />
      <About />
      <Services />
    </>
  );
}
