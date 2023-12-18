import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";
import { Loader } from "../../Components/Loader";

function Home() {
  const context = useContext(PokemonContext);

  const renderView = () => {
    if (context.searchPokemon?.length > 0) {
      if (context.filteredpokemons?.length > 0) {
        return context.filteredpokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} />;
        });
      } else {
        return <div>Pokemon not found</div>;
      }
    } else {
      {
        return context.pokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} />;
        });
      }
    }
  };

  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>
      <section className="Home-content">{renderView()}</section>
      <PokeInfo />
    </div>
  );
}

export { Home };
