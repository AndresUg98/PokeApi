import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";
import { GrFavorite } from "react-icons/gr";
import "./PokeCard.scss";

function PokeCard({ data }) {
  const context = useContext(PokemonContext);

  //sending the pokemon info to the PokeInfo card
  const showPokemon = (pokemonInfo) => {
    context.openPokeInfo();
    context.setPokemonToShow(pokemonInfo);
  };

  const addFavoritePokemon = (event, pokemonData) => {
    event.stopPropagation();
    context.setFavoritePokemons([...context.favoritePokemons, pokemonData]);
    console.log("Tus pokemones favoritos son: ", context.favoritePokemons);
  };

  return (
    <div className="PokeCard-contianer" onClick={() => showPokemon(data)}>
      <figure className="container-favoriteIcon">
        <GrFavorite
          className="favoriteIcon"
          onClick={(event) => addFavoritePokemon(event, data)}
        />
      </figure>
      <figure className="PokeCard-img">
        <img src={data.img} alt="" />
      </figure>
      <p>{data.name}</p>
      <span className="PokeCard-types__container">
        {/* imprimiedo los tipos de los pokemon */}
        {data.types?.map((type) => (
          <p key={type} className={type + " types"}>
            {type}
          </p>
        ))}
      </span>
    </div>
  );
}

export { PokeCard };
