import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { PokeInfo } from "../PokeInfo";
import { PokeTeam } from "../PokeTeam";
import { NotFound } from "../NotFound";
import { Navbar } from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/PokeInfo", element: <PokeInfo /> },
    { path: "/PokeTeam", element: <PokeTeam /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;