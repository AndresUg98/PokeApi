import React, { useContext } from "react";
import { PokeCard } from "../../Components/PokeCard";
import { PokemonContext } from "../../Context";
import "./PokeTeam.scss";
function PokeTeam() {
  const context = useContext(PokemonContext);
  return (
    <div className="container">
      {context.favoritePokemons?.map((pokemon) => {
        return <PokeCard key={pokemon.name} data={pokemon} />;
      })}
    </div>
  );
}

export { PokeTeam };
