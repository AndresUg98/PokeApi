import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeTeam } from "../../Components/PokeTeam";
import { PokeInfo } from "../../Components/PokeInfo";
import { PokeCard } from "../../Components/PokeCard";
import { Loader } from "../../Components/Loader";
import "./Home.scss";

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
      <section className="Home-content">
        {context.loading && <Loader />}

        {renderView()}
      </section>
      <PokeInfo />
      <PokeTeam />
    </div>
  );
}

export { Home };
