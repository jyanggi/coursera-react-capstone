import "./About.scss";
import img1 from "./Mario and Adrian A.jpg";
import img2 from "./Mario and Adrian b.jpg";

const About = () => {
  return (
    <section id="about-section">
      <article className="article1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </article>
      <article className="article2">
        <img className="img1" src={img1} alt="Mariano and Adrian" />
        <img className="img2" src={img2} alt="Mariano and Adrian" />
      </article>
    </section>
  );
};

export default About;
