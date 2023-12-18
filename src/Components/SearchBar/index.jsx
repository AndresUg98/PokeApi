import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import "./SearchBar.scss";
function SearchBar() {
  const context = useContext(PokemonContext);
  return (
    <div className="SearchBar-container">
      <input
        className="SearchBar"
        type="text"
        onChange={(event) => context.setSearchPokemon(event.target.value)}
      />
    </div>
  );
}

export { SearchBar };
