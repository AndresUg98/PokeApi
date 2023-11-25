import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import "./Navbar.scss";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <ul className="Navbar-elements">
        <li className="Navbar-team">
          <NavLink to="/PokeTeam">
            <MdCatchingPokemon />
          </NavLink>
        </li>
        <li className="Navbar-home">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="Navbar-back">
          <NavLink onClick={() => navigate(-1)}>Back</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
