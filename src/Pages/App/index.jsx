import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { PokemonProvider } from "../../Context";
import { Navbar } from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/PokeApi", element: <Home /> }]);
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
