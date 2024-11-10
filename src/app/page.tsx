"use client";
import Hero from "@/components/hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import About from "@/components/About";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "@/components/contact";


export default function Home() {
  useEffect (()=>{
     AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
     });
     AOS.refresh()
  },[]);
  return (
   <main>
    <Hero />
    <Project />
    <Skills />
    <Contact />
    <About />
   </main>
  );
}
