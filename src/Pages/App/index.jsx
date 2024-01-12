import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { PokemonProvider } from "../../Context";
import { NotFound } from "../NotFound";
import { Navbar } from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
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
