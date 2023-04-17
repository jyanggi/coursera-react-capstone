import "./Hero.scss";
import heroImage from "./restauranfood.jpg";

const Hero = () => {
  return (
    <section id="hero-section">
      <article className="article1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a table</button>
      </article>
      <article className="article2">
        <img src={heroImage} alt="Restaurant food" />
      </article>
    </section>
  );
};

export default Hero;
