import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  //Getting all the pokemons and putting then into the pokemons state
  const [pokemons, setPokemons] = useState(null);
  //  consuming the pokemon api
  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=1008";

  //Visible pokemons will help us to store the pokemons that we want to be seen, so we don't overload the page
  const [visiblePokemon, setVisiblePokemon] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        //Recuperar la lista de los pokemones
        const response = await fetch(pokeApi);
        const pokemonArray = await response.json();

        const { results } = pokemonArray;

        const NewPokemons = results.map(async (pokemon) => {
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
            order: poke.order,
            types: types,
            ability: abilities,
            stats: stats,
          };
        }, context.setLoading(false));

        setPokemons(await Promise.all(NewPokemons));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    getPokemons();
  }, []);

  useEffect(() => {
    //loading de data progressively at the moment of doing scroll, so we can implement the infinite scroll
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading
      ) {
        //the user has reach the end of the page, loading more pokemon
        loadMorePokemon();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  const loadMorePokemon = () => {
    setLoading(true);

    // it make a pause so the data can load
    setTimeout(() => {
      const nextPage = visiblePokemon.length / 151 + 1;
      const nextPokemon = pokemons.slice(nextPage * 151, (nextPage + 1) * 151);
      setVisiblePokemon((prevPokemon) => [...prevPokemon, ...nextPokemon]);
      setLoading(false);
    }, 1000); // Puedes ajustar el tiempo de espera según tus necesidades
  };

  const context = useContext(PokemonContext);

  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>

      <section className="Home-content">
        {loading && <p>Estamos cargando</p>}
        {context.error && <p>Error</p>}
        {pokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} />;
        })}
      </section>
    </div>
  );
}

export { Home };
