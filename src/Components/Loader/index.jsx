import React from "react";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader-container">
      <div className="pokeball">
        <div className="button"></div>
      </div>
      <h3>Loading...</h3>
    </div>
  );
}

export { Loader };
