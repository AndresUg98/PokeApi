import { createContext, useState, useEffect } from "react";
import React from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //Open PokemonInfo
  const [isPokeInfoOpen, setIsPokeInfoOpen] = useState(false);
  //Open Pokemon Team
  const [isPokeTeamOpen, setIsPokeTeamOpen] = useState(false);
  // get pokemons
  const [pokemons, setPokemons] = useState(null);
  //const [pokemons2, setPokemons2] = useState([]);

  // get pokemons for filtering
  const [filteredpokemons, setFilteredpokemons] = useState(null);
  //stores what we are typing
  const [searchPokemon, setSearchPokemon] = useState("");

  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=1008";
  //  consumiendo api pokemon

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

    // setTimeout(() => {
    //   setLoading(false);
    // }, 20000);
    getPokemons();
  }, []);

  const openPokeInfo = () => setIsPokeInfoOpen(true);
  const closePokeInfo = () => setIsPokeInfoOpen(false);

  const openClosePokeTeam = () =>
    !isPokeTeamOpen == true
      ? setIsPokeTeamOpen(true)
      : setIsPokeTeamOpen(false);

  const closeAll = () => setIsPokeInfoOpen(false) || setIsPokeTeamOpen(false);

  //Pokemon info . show pokemon info
  const [pokemonToShow, setPokemonToShow] = useState({});

  const filteredPokemons = (pokemons, searchPokemon) => {
    if (isNaN(searchPokemon)) {
      return pokemons?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()) ||
          pokemon.types.includes(searchPokemon.toLowerCase())
      );
    } else {
      return pokemons?.filter(
        (pokemon) => pokemon.id == parseInt(searchPokemon)
      );
    }
  };

  useEffect(() => {
    if (searchPokemon)
      setFilteredpokemons(filteredPokemons(pokemons, searchPokemon));
  }, [pokemons, searchPokemon]);

  //Using Local Storage
  const localStoragePokemons = localStorage.getItem("FavoritePokemons_V1");

  let parsedPokemons;

  if (!localStoragePokemons) {
    localStorage.setItem("FavoritePokemons_V1", JSON.stringify([]));
    parsedPokemons = [];
  } else {
    parsedPokemons = JSON.parse(localStoragePokemons);
  }

  //stores the favorite pokemons of the user and puts them into the 'pokeTeam' page
  const [favoritePokemons, setFavoritePokemons] = useState(parsedPokemons);

  //storing the favorite pokemons on the localStorage
  localStorage.setItem("FavoritePokemons_V1", JSON.stringify(favoritePokemons));

  return (
    <PokemonContext.Provider
      value={{
        openPokeInfo,
        closePokeInfo,
        openClosePokeTeam,
        closeAll,
        isPokeTeamOpen,
        isPokeInfoOpen,
        pokemonToShow,
        setPokemonToShow,
        pokemons,
        setPokemons,
        searchPokemon,
        setSearchPokemon,
        filteredpokemons,
        favoritePokemons,
        setFavoritePokemons,
        loading,
        setLoading,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
