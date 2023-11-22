import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { PokeInfo } from "../PokeInfo";
import { PokeTeam } from "../PokeTeam";
import { NotFound } from "../NotFound";
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
    </BrowserRouter>
  );
}

export default App;
