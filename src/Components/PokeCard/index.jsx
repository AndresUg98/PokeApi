import React from "react";
import "./PokeCard.scss";
function PokeCard({ name, img, types }) {
  return (
    <div className="PokeCard-contianer">
      <figure className="PokeCard-img">
        <img src={img} alt="" />
      </figure>
      <p>{name}</p>
      <span className="PokeCard-types__container">
        {/* imprimiedo los tipos de los pokemon */}
        {types?.map((type) => (
          <p className={type + " types"}>{type}</p>
        ))}
      </span>
    </div>
  );
}

export { PokeCard };
