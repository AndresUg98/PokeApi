import React, { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { PokemonContext } from "../../Context";
import "./Layout.scss";
function Layout({ children }) {
  const context = useContext(PokemonContext);
  return (
    <div className="Layout-container">
      {/* <XCircleIcon className="x-Icon" onClick={() => context.closePokeInfo()} /> */}
      {children}
    </div>
  );
}

export { Layout };
