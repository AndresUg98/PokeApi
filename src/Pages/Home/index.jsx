import React from "react";
import "./Home.scss";
import { SearchBar } from "../../Components/SearchBar";
function Home() {
  return (
    <div className="Home-header">
      <h1>POKEDEX</h1>
      <h2>¡Gotta chatch'em all!</h2>
      <SearchBar />
    </div>
  );
}

export { Home };
