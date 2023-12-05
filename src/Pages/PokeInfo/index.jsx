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
            <Bar
              data={{
                labels: ["HP", "Atk", "Def", "Sp.Atk", "Sp.Def", "Spd"],
                datasets: [
                  {
                    label: "Basic Stats",
                    data: [45, 49, 65, 65, 65, 45],
                    backgroundColor: [
                      "rgba(61, 225, 80, 0.8)",
                      "rgba(235, 34, 34, 0.8)",
                      "rgba(36, 34, 235, 0.8)",
                      "rgba(239, 83, 231, 0.88)",
                      "rgba(83, 208, 239, 0.88)",
                      "rgba(246, 244, 44, 0.88)",
                    ],
                    borderRadius: 15,
                  },
                ],
              }}
              options={{
                aspectRatio: false,
                indexAxis: "y",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { PokeInfo };
