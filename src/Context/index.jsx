import { createContext, useState, useEffect } from "react";
import React from "react";
const URL_DEFAULT = `https://pokeapi.co/api/v2/pokemon?limit=63&offset=0`;

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Open PokemonInfo
  const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false);
  // get pokemons
  const [pokemons, setPokemons] = useState(null);
  //
  const [nextUrl, setNextUrl] = useState("");

  const [loadMorePokemons, setLoadMorePokemons] = useState(true);

  const [filteredpokemons, setFilteredpokemons] = useState(null);
  //stores what we are typing
  const [searchPokemon, setSearchPokemon] = useState(null);

  //  consumiendo api pokemon
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
    const { next, NewPokemons } = await getPokemons();
    setPokemons(NewPokemons);
    setNextUrl(next);
  };

  const morePokemons = async () => {
    const { next, NewPokemons } = await getPokemons(nextUrl);
    setPokemons((prev) => [...prev, ...NewPokemons]);
    next == null && setLoadMorePokemons(false);
    setNextUrl(next);
  };

  useEffect(() => {
    obtenerPokemones();

    morePokemons();

    //getPokemons();
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

  //morePokemons();
  //console.log(filteredpokemons);
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
        morePokemons,
        loadMorePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
