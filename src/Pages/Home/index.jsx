import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { PokemonContext } from "../../Context";
import { SearchBar } from "../../Components/SearchBar";
import { PokeTeam } from "../../Components/PokeTeam";
import { PokeInfo } from "../../Components/PokeInfo";
import { PokeCard } from "../../Components/PokeCard";
import { Loader } from "../../Components/Loader";
import { NotFound } from "../../Components/NotFound";
import "./Home.scss";

function Home() {
  const context = useContext(PokemonContext);

  const renderView = () => {
    if (context.searchPokemon?.length > 0) {
      if (context.filteredpokemons?.length > 0) {
        return context.filteredpokemons?.map((pokemon) => {
          return <PokeCard key={pokemon.name} data={pokemon} location={true} />;
        });
      } else {
        return <NotFound />;
      }
    } else {
      {
        return context.pokemons?.map((pokemon) => {
          //location is used to know where the item is being render. In the "Home" or in the "PokeTeam"
          //The value of "location" is connected with the "loading" function that helps the "loader" when to disappear
          return <PokeCard key={pokemon.name} data={pokemon} location={true} />;
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
        {context.loading ? (
          <Loader value={"bg-loader"} />
        ) : (
          <Loader value={"out"} />
        )}
        {/* {renderLoader()} */}
        {renderView()}
      </section>
      <PokeInfo />
      <PokeTeam />
    </div>
  );
}

export { Home };
