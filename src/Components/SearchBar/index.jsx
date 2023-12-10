import React, { useContext } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import Search from "../../assets/icons/search.png";
import "./SearchBar.scss";

function SearchBar() {
  const { setSearchPokemonName } = usePokemons();
  return (
    <div className="SearchBar-container">
      {/* <img src={Search} alt=""  /> */}
      <input
        className="SearchBar"
        type="text"
        onChange={(event) => setSearchPokemonName(event.target.value)}
      />
    </div>
  );
}

export { SearchBar };
