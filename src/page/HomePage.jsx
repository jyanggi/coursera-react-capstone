import Hero from "../components/hero/Hero";
import Highlights from "../components/highligts/Highlights";
import Testimonials from "../components/testimonials/Testimonials";
import About from "../components/about/About";

function HomePage() {
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
