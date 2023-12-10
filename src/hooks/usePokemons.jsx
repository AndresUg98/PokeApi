import React, { useState, useEffect } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=63&offset=0";

function usePokemons() {
  //  consuming the pokemon api

  //Getting all the pokemons and putting then into the pokemons state
  const [pokemons, setPokemons] = useState([]);

  const [siguienteUrl, setSiguienteUrl] = useState("");

  const [loadMorePokemons, setLoadMorePokemons] = useState(true);

  const getPokemons = async (url = URL_DEFAULT) => {
    try {
      //Recuperar la lista de los pokemones
      const response = await fetch(url);
      const pokemonArray = await response.json();
      // we sustract the next and results attributes from the response, next redirect you to the next 20 results
      const { next, results } = pokemonArray;

      const NewPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();

          //Obtaining the types of the poekemon
          let types = poke.types.map((type) => type.type.name);
          //Obtaining the abilities of the poekemon
          let abilities = poke.abilities.map((ability) => ability.ability.name);
          //Obtaining the stats of the poekemon
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
            order: poke.id,
            types: types,
            ability: abilities,
            stats: stats,
          };
        })
      );
      return { next, NewPokemons };
    } catch (error) {
      // if the pokemon that we are calling doesn't have a property that we need, we stop calling for more pokemons
      setLoadMorePokemons(false);
    }
  };

  const obtenerPokemones = async () => {
    const { next, NewPokemons } = await getPokemons(); //the function getPokemos returns de "next" variable and de array of pokemons "NewPokemons"
    setPokemons(NewPokemons);
    setSiguienteUrl(next);
  };

  const loadPokemons = async () => {
    const { next, NewPokemons } = await getPokemons(siguienteUrl);
    setPokemons((prev) => [...prev, ...NewPokemons]);
    next == null && setLoadMorePokemons(false);
    setSiguienteUrl(next);
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  return {
    pokemons,
    loadPokemons,
    loadMorePokemons,
  };
}

export { usePokemons };
