import React from "react";
import "./PokeCard.scss";
function PokeCard({ name, img }) {
  return (
    <div className="PokeCard-contianer">
      <figure className="PokeCard-img">
        <img src={img} alt="" />
      </figure>
      <p>{name}</p>
      <p>Fire</p>
    </div>
  );
}

export { PokeCard };
