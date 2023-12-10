import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import Search from "../../assets/icons/search.png";
import "./SearchBar.scss";
function SearchBar() {
  const context = useContext(PokemonContext);
  return (
    <div className="SearchBar-container">
      {/* <img src={Search} alt=""  /> */}
      <input
        className="SearchBar"
        type="text"
        onChange={(event) => context.setSearchPokemonName(event.target.value)}
      />
    </div>
  );
}

export { SearchBar };
