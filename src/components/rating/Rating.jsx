import React from "react";
import "./Rating.scss";

const Rating = (props) => {
  return (
    <article className="rating-card">
      <img src={props.img} alt={props.name} />
      <p>"{props.description}"</p>
      <h4>
        <span>- {props.name}</span>
      </h4>

      <h5>
        {Array(props.rating)
          .fill(1)
          .map((_, i) => (
            <span key={i}>&#9733;</span>
          ))}
      </h5>
      <h5>{props.rating}/5</h5>
    </article>
  );
};

export default Rating;
