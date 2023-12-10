import { createContext, useState } from "react";
import React from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Pokemon info . show pokemon info
  const [pokemonToShow, setPokemonToShow] = useState({});
  // get pokemons by name

  return (
    <PokemonContext.Provider
      value={{
        pokemonToShow,
        setPokemonToShow,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
