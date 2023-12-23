import { createContext, useState, useEffect } from "react";
import React from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Open PokemonInfo
  const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false);
  // get pokemons
  const [pokemons, setPokemons] = useState(null);
  // get pokemons
  const [filteredpokemons, setFilteredpokemons] = useState(null);
  //stores what we are typing
  const [searchPokemon, setSearchPokemon] = useState(null);

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
      });

      setPokemons(await Promise.all(NewPokemons));
    };

    getPokemons();
  }, []);

  const openPokeInfo = () => setIsPokeInfoOpen(true);
  const closePokeInfo = () => setIsPokeInfoOpen(false);

  //Pokemon info . show pokemon info
  const [pokemonToShow, setPokemonToShow] = useState({});
  // get pokemons by name

  const filteredPokemons = (pokemons, searchPokemon) => {
    if (isNaN(searchPokemon)) {
      return pokemons?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()) ||
          pokemon.types.includes(searchPokemon.toLowerCase())
      );

      //   return pokemons?.filter((pokemon) =>
      //   pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      // );
    } else {
      return pokemons?.filter(
        (pokemon) => pokemon.id == parseInt(searchPokemon)
      );
    }
  };

  // const pokemonTypes = pokemons.map((pokemon) => pokemon.types);
  // console.log(pokemonTypes?.map((type) => type));

  useEffect(() => {
    if (searchPokemon)
      setFilteredpokemons(filteredPokemons(pokemons, searchPokemon));
  }, [pokemons, searchPokemon]);

  console.log(filteredpokemons);
  return (
    <PokemonContext.Provider
      value={{
        openPokeInfo,
        closePokeInfo,
        isPokeInfoOpen,
        pokemonToShow,
        setPokemonToShow,
        pokemons,
        setPokemons,
        searchPokemon,
        setSearchPokemon,
        filteredpokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
