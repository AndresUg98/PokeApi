import { createContext, useState } from "react";
import React from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Open PokemonInfo
  const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false);

  const openPokeInfo = () => setIsPokeInfoOpen(true);
  const closePokeInfo = () => setIsPokeInfoOpen(false);

  //Pokemon info . show pokemon info
  const [pokemonToShow, setPokemonToShow] = useState({});

  return (
    <PokemonContext.Provider
      value={{
        openPokeInfo,
        closePokeInfo,
        isPokeInfoOpen,
        pokemonToShow,
        setPokemonToShow,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
