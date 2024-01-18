import React, { useContext } from "react";
import { PokeCard } from "../PokeCard";
import { PokemonContext } from "../../Context";
import "./PokeTeam.scss";
import pokeballBg from "../../assets/icons/pokeball-bg.png";
function PokeTeam() {
  const context = useContext(PokemonContext);
  return (
    <div className={`${context.isPokeTeamOpen ? "container" : "close"}`}>
      <h3 className="pokeTeam-title">My Team</h3>

      <figure className="pokeballBg">
        <img src={pokeballBg} alt="" />
      </figure>
      <div className="pokemons-container">
        {context.favoritePokemons?.map((pokemon) => {
          return (
            <PokeCard key={pokemon.name} data={pokemon} location={false} />
          );
        })}
      </div>
    </div>
  );
}

export { PokeTeam };
