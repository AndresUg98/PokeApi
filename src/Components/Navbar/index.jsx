import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Pokeball from "../../assets/icons/pokeball.png";
import Pokedex from "../../assets/icons/pokedex.png";
import Back from "../../assets/icons/back.png";
import "./Navbar.scss";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <ul className="Navbar-elements">
        <li className="Navbar-team">
          <NavLink to="/PokeTeam">
            <img src={Pokeball} alt="" srcset="" />
          </NavLink>
        </li>
        <li className="Navbar-home">
          <NavLink to="/">
            <img src={Pokedex} alt="" srcset="" />
          </NavLink>
        </li>
        <li className="Navbar-back">
          <NavLink onClick={() => navigate(-1)}>
            <img src={Back} alt="" srcset="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
