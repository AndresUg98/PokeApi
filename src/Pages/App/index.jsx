import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { PokemonProvider } from "../../Context";
import { PokeInfo } from "../PokeInfo";
import { PokeTeam } from "../PokeTeam";
import { NotFound } from "../NotFound";
import { Navbar } from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/PokeTeam", element: <PokeTeam /> },
    { path: "/PokeInfo", element: <PokeInfo /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
