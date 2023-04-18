import MenuCard from "../menu-card/MenuCard";
import "./Highlights.scss";

import greekSalad from "./greek salad.jpg";
import lemonDessert from "./lemon dessert.jpg";
import bruchetta from "./bruchetta.svg";

const MENU = [
  {
    img: greekSalad,
    name: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruchetta,
    name: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: lemonDessert,
    name: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <section id="menu-section">
      <article className="menu-header">
        <h1>This weeks specials!</h1>
        <div>
          <button>Online Menu</button>
        </div>
      </article>
      <article className="menu">
        {MENU.map((m) => (
          <MenuCard {...m} />
        ))}
      </article>
    </section>
  );
};

export default Highlights;
