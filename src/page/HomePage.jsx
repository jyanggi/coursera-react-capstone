import Hero from "../components/hero/Hero";
import Highlights from "../components/highligts/Highlights";
import Testimonials from "../components/testimonials/Testimonials";
import About from "../components/about/About";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
function HomePage() {
  const location = useLocation();
  const handleClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    const { hash } = location;
    if (hash) {
      handleClick(hash);
    }
  }, [location]);
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default HomePage;
