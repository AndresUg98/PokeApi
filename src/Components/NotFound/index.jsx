import React from "react";
import "./NotFound.scss";
import pikachuSurprised from "../../assets/icons/pikachuSurprised.png";
function NotFound() {
  return (
    <div className="NotFound-container">
      <h3>Pokemon not found</h3>
      <figure className="img-container">
        <img src={pikachuSurprised} alt="" srcset="" />
      </figure>
    </div>
  );
}

export { NotFound };
