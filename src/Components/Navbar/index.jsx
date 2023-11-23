import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <ul className="Navbar-elements">
        <li>
          <NavLink to="/PokeTeam">Team</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={() => navigate(-1)}>Back</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
