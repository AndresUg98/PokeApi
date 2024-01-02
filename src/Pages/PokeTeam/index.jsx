import React, { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { PokeCard } from "../../Components/PokeCard";
import { PokemonContext } from "../../Context";
function PokeTeam() {
  const context = useContext(PokemonContext);
  return (
    <Layout>
      {context.favoritePokemons?.map((pokemon) => {
        return <PokeCard key={pokemon.name} data={pokemon} />;
      })}
    </Layout>
  );
}

export { PokeTeam };
