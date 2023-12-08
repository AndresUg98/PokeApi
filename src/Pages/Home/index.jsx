import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  const { pokemons, loadPokemons, loadMorePokemons } = usePokemons();

  //console.log(pokemons);

  const context = useContext(PokemonContext);

  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>

      <InfiniteScroll
        dataLength={pokemons.length}
        next={loadPokemons}
        hasMore={loadMorePokemons}
        loader={<h4>Cargando</h4>}
        endMessage={<h4>No hay mas</h4>}
        className="Home-content"
      >
        {/* {context.loading && <p>Estamos cargando</p>}
        {context.error && <p>Error</p>} */}
        {pokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export { Home };
