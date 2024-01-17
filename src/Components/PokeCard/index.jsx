import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";
import { GrFavorite } from "react-icons/gr";
import "./PokeCard.scss";
import { render } from "react-dom";

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
    //console.log("Tus pokemones favoritos son: ", context.favoritePokemons);
  };

  const removeFavoritePokemon = (event, pokemonData) => {
    event.stopPropagation();
    const removedPokemon = context.favoritePokemons.filter(
      (pokemon) => pokemonData.id !== pokemon.id
    );
    context.setFavoritePokemons(removedPokemon);
  };

  const renderIcon = (id) => {
    const isInFavoritesPokemons =
      context.favoritePokemons.filter((pokemon) => pokemon.id === id).length >
      0;
    if (isInFavoritesPokemons) {
      return (
        <figure className="container-favoriteIcon check">
          <GrFavorite
            className="favoriteIcon checkIcon"
            onClick={(event) => removeFavoritePokemon(event, data)}
          />
        </figure>
      );
    } else {
      return (
        <figure className="container-favoriteIcon">
          <GrFavorite
            className="favoriteIcon"
            onClick={(event) => addFavoritePokemon(event, data)}
          />
        </figure>
      );
    }
  };

  const myRef = React.useRef(null);

  useEffect(() => {
    const node = myRef.current;
    if (document.contains(node)) {
      context.setLoading(false);
    }
  }, []);

  return (
    <div
      ref={myRef}
      className="PokeCard-contianer"
      onClick={() => showPokemon(data)}
    >
      {renderIcon(data.id)}
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
