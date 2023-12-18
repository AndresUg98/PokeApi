import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./PokeInfo.scss";
function PokeInfo() {
  const context = useContext(PokemonContext);

  return (
    <div
      className={`${
        context.isPokeInfoOpen ? "PokemonInfo-container" : "close"
      }`}
    >
      <XCircleIcon className="x-Icon" onClick={() => context.closePokeInfo()} />
      <figure className="PokemonInfo-imgContainer">
        <img className="imf" src={context.pokemonToShow.img} alt="" />
      </figure>
      <div className="PokemonInfo-dataContainer">
        <span className="dataContianer__entry">
          <h4>{context.pokemonToShow.name}</h4>
          <p>{context.pokemonToShow.entry}</p>
        </span>

        <span className="dataContainer__mesurments">
          <p>
            <b> Weight:</b> {context.pokemonToShow.weight} lbs
          </p>
          <p>
            <b>Height:</b> {context.pokemonToShow.height} ft
          </p>
          <p>
            <b>Dex n°:</b> {context.pokemonToShow.order}
          </p>
        </span>
        <span className="dataContiner__type">
          <p>Type:</p>
          {context.pokemonToShow.types?.map((type) => (
            <p className={type + " InfoTypes"}>{type}</p>
          ))}
        </span>
        <div className="dataContiner__abilities">
          <p>Abilities:</p>
          <span className="abilities">
            {context.pokemonToShow.ability?.map((ability) => (
              <p>{ability}</p>
            ))}
          </span>
        </div>

        <Bar
          data={{
            labels: ["HP", "Atk", "Def", "Sp.Atk", "Sp.Def", "Spd"],
            datasets: [
              {
                label: "Basic Stats",
                data: context.pokemonToShow.stats,
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
  );
}

export { PokeInfo };
