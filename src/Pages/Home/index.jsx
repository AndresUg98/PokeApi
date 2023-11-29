import React, { useState, useEffect } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  const [pokemons, setPokemons] = useState(null);
  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=1008";
  //  consumiendo api pokemon

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
          img: poke.sprites.other["official-artwork"].front_default,
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
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              img={pokemon.img}
            />
          );
        })}
      </section>
    </div>
  );
}

export { Home };
