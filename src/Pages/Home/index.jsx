import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeInfo } from "../../Components/PokeInfo";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  const context = useContext(PokemonContext);
  // const handleClick = () => {
  //   context.morePokemons();
  //   context.loadMorePokemons(true);
  // };

  const button = document.getElementById("loadMorePokemons");

  function clickButton() {
    button.click(context.morePokemons());
  }

  // Llamar a la función que simula el clic cada 5 segundos
  setInterval(clickButton, 10000);

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
        {renderView()}
        <button id="loadMorePokemons">mostrar mas</button>
        {/* <button onClick={context.morePokemons} id="loadMorePokemons"></button> */}
      </section>
      <PokeInfo />
    </div>
  );
}

export { Home };
