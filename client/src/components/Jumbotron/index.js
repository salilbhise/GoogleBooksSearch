import React from "react";
import './jumbotron.css';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
    Google Books Search
      {children}
    </div>
  );
}

export default Jumbotron;
