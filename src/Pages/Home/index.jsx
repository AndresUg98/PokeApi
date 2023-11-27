import React from "react";
import { SearchBar } from "../../Components/SearchBar";
import { PokeCard } from "../../Components/PokeCard";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <section className="Home-header">
        <h1>POKEDEX</h1>
        <h2>¡Gotta chatch'em all!</h2>
        <SearchBar />
      </section>
      <section className="Home-content">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </section>
    </div>
  );
}

export { Home };
