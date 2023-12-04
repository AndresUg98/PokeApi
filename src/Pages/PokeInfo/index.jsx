import React from "react";
import { Layout } from "../../Components/Layout";
import { Chart } from "chart.js/auto";

import { Bar } from "react-chartjs-2";
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
          <span className="dataContianer__entry">
            <h4>Cyndaquil</h4>
            <p>
              It has a timid nature. If it is startled, the flames on its back
              burn more vigorously.
            </p>
          </span>

          <span className="dataContainer__mesurments">
            <p>
              <b> Weight:</b> 7.9kg
            </p>
            <p>
              <b>Height:</b> 0.5m
            </p>
            <p>
              <b>Dex n°:</b> 155
            </p>
          </span>
          <span className="dataContiner__abilities">
            <p>Type: fire</p>
            <p>Abilities: Blaze, Flash Fire</p>
          </span>
          <div className="dataContainer__stats">
            <span>
              <p>HP: 45</p>
              <p>Attack: 49</p>
              <p>Defense: 65</p>
              <p>S.Atack: 65</p>
              <p>S.Defense: 65</p>
              <p>Speed: 45</p>
            </span>
          </div>

          <Bar
            data={{
              labels: [
                "HP",
                "Attack",
                "Defense",
                "S.Attack",
                "S.Defense",
                "Speed",
              ],
              datasets: [
                {
                  axis: "y",
                  label: "Stats",
                  data: [45, 49, 65, 65, 65, 45],
                },
              ],
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export { PokeInfo };
