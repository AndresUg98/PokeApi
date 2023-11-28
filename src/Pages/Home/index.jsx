import React, { useState, useEffect } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  const [pokemons, setPokemons] = useState(null);
  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
  //  consumiendo api pokemon
  // useEffect(() => {
  //   //fetch nos permite conectarnos a la api
  //   fetch(pokeApi)
  //     .then((response) => response.json())
  //     //Debido a la cantidad de pokemon, tuvimos que entrar al atributo results que nos que es donde esta la verdadera informacion de los pokemon
  //     .then((data) => setPokemons(data.results));

  // }, []);

  useEffect(() => {
    const getPokemons = async () => {
      //Recuperar la lista de los pokemones
      const response = await fetch(pokeApi);
      const pokemonArray = await response.json();
      const { results } = pokemonArray;

      const NewPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });

      setPokemons(await Promise.all(NewPokemons));
    };

    getPokemons();
  }, []);

  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>
      <section className="Home-content">
        {/* <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard /> */}

        {pokemons?.map((pokemon) => {
          return (
            <PokeCard key={pokemon.url} name={pokemon.name} img={pokemon.img} />
          );
        })}
      </section>
    </div>
  );
}

export { Home };
