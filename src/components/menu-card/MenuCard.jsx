import React from "react";
import "./MenuCard.scss";

const MenuCard = (props) => {
  return (
    <article className="menu-card">
      <img src={props.img} alt={props.name}/>
      <h4>
        <span>{props.name}</span>
        <span>${props.price}</span>
      </h4>
      <p>{props.description}</p>
    </article>
  );
};

export default MenuCard;
