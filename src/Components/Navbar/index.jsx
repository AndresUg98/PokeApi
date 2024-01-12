import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Pokeball from "../../assets/icons/pokeball.png";
import Pokedex from "../../assets/icons/pokedex.png";
import Back from "../../assets/icons/back.png";
import { PokemonContext } from "../../Context";
import "./Navbar.scss";
function Navbar() {
  const context = useContext(PokemonContext);
  return (
    <nav className="Navbar">
      <ul className="Navbar-elements">
        <li className="Navbar-team">
          <NavLink onClick={() => context.openClosePokeTeam()}>
            <img src={Pokeball} alt="" />
          </NavLink>
        </li>
        <li className="Navbar-home">
          <NavLink onClick={() => context.closeAll()} to="./">
            <img src={Pokedex} alt="" />
          </NavLink>
        </li>
        <li className="Navbar-back">
          <NavLink onClick={() => context.closePokeInfo()}>
            <img src={Back} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
