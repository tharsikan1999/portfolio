"use client";
import { ToastContainer } from "react-toastify";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import React from "react";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <LogoSlider />
      <About />
      <Services />
      <Skills />
      <Cta />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}
