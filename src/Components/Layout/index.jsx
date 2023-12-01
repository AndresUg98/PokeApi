import React from "react";
import "./Layout.scss";
function Layout({ children }) {
  return <div className="Layout-container">{children}</div>;
}

export { Layout };
