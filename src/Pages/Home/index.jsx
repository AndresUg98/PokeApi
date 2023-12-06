import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  const [pokemons, setPokemons] = useState(null);
  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=151";
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

        //Obtaining the types of the poe=kemon
        let types = poke.types.map((type) => type.type.name);
        let abilities = poke.abilities.map((ability) => ability.ability.name);
        let stats = poke.stats.map((stat) => stat.base_stat);

        //obtaining the description of each pokemon
        let res;
        res = await fetch(poke["species"]["url"]);
        let pokemonDescription = await res.json();
        pokemonDescription =
          pokemonDescription["flavor_text_entries"][0]["flavor_text"];

        //console.log(pokemonDescription);

        return {
          id: poke.id,
          name: poke.name,
          entry: pokemonDescription,
          img: poke.sprites.other["official-artwork"].front_default,
          weight: poke.weight,
          height: poke.height,
          order: poke.order,
          types: types,
          ability: abilities,
          stats: stats,
        };
      }, context.setLoading(false));

      setPokemons(await Promise.all(NewPokemons));
    };

    getPokemons();
  }, []);

  const context = useContext(PokemonContext);

  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>

      <section className="Home-content">
        {context.loading && <p>Estamos cargando</p>}
        {context.error && <p>Error</p>}
        {pokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} />;
        })}
      </section>
    </div>
  );
}

export { Home };
