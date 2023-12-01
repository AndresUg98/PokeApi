import { createContext } from "react";
import React from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  return <PokemonContext.Provider>{children}</PokemonContext.Provider>;
};
