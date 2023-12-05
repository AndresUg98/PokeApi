import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import "./PokeCard.scss";

function PokeCard({ data }) {
  const context = useContext(PokemonContext);
  //sending the pokemon info to the PokeInfo card
  const showPokemon = (pokemonInfo) => {
    context.openPokeInfo();
    context.setPokemonToShow(pokemonInfo);
  };
  return (
    <div className="PokeCard-contianer" onClick={() => showPokemon(data)}>
      <figure className="PokeCard-img">
        <img src={data.img} alt="" />
      </figure>
      <p>{data.name}</p>
      <span className="PokeCard-types__container">
        {/* imprimiedo los tipos de los pokemon */}
        {data.types?.map((type) => (
          <p className={type + " types"}>{type}</p>
        ))}
      </span>
    </div>
  );
}

export { PokeCard };
