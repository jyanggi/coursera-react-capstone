import Rating from "../rating/Rating";
import "./Testimonials.scss";

import img1 from "./testi1.png";
import img2 from "./testi2.png";
import img3 from "./testi3.png";
const RATINGS = [
  {
    img: img1,
    name: "Jane",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem.",
  },
  {
    img: img2,
    name: "Sarah",
    rating: 4,
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem.",
  },
  {
    img: img3,
    name: "Jim",
    rating: 5,
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials-section">
      <h2>Testimonials</h2>
      <article className="menu">
        {RATINGS.map((m) => (
          <Rating {...m} />
        ))}
      </article>
    </section>
  );
};

export default Testimonials;
