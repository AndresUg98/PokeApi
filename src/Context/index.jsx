import { createContext, useState } from "react";
import React from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Open PokemonInfo
  // const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false);

  // const openPokeInfo = () => setIsPokeInfoOpen(true);
  // const closePokeInfo = () => setIsPokeInfoOpen(false);

  //Pokemon info . show pokemon info
  const [pokemonToShow, setPokemonToShow] = useState({});

  //loading and error states, the loading state help us to load the data from the api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <PokemonContext.Provider
      value={{
        // openPokeInfo,
        // closePokeInfo,
        // isPokeInfoOpen,
        pokemonToShow,
        setPokemonToShow,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
