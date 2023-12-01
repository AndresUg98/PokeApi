import React from "react";
import { Layout } from "../../Components/Layout";
import "./PokeInfo.scss";
function PokeInfo() {
  return (
    <Layout>
      <div className="PokemonInfo-container">
        <figure className="PokemonInfo-imgContainer">
          <img
            className="imf"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
            alt=""
            srcset=""
          />
        </figure>
        <div className="PokemonInfo-dataContainer">
          <span className="PokeInfo-dataContianer__entry">
            <h4>Cyndaquil</h4>
            <p>
              It has a timid nature. If it is startled, the flames on its back
              burn more vigorously.
            </p>
          </span>

          <span className="PokemonInfo">
            <p>Weight: 7.9kg</p>
            <p>Height: 0.5m</p>
            <p>Dex n°: 155</p>
          </span>
          <span>
            <p>Type: fire</p>
            <p>Abilities: Blaze, Flash Fire</p>
          </span>
          <span>
            <p>Moves:</p>
            <ul>
              <li>Cut (lvl 5)</li>
              <li>Cut (lvl 5)</li>
              <li>Cut (lvl 5)</li>
              <li>Cut (lvl 5)</li>
              <li>Cut (lvl 5)</li>
              <li>Cut (lvl 5)</li>
            </ul>
          </span>
        </div>
      </div>
    </Layout>
  );
}

export { PokeInfo };
