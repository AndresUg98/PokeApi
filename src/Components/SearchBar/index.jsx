import React from "react";
import Search from "../../assets/icons/search.png";
import "./SearchBar.scss";
function SearchBar() {
  return (
    <div className="SearchBar-container">
      <img src={Search} alt="" srcset="" />
      <input className="SearchBar" type="text" />
    </div>
  );
}

export { SearchBar };
