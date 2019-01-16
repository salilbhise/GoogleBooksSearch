import React from "react";
import './navbar.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
       Home
      </a>
      <a className="navbar-brand" href="/">
       Search
      </a>
      <a className="navbar-brand" href="/saved">
       Saved
      </a>
    </nav>
  );
}

export default Nav;
