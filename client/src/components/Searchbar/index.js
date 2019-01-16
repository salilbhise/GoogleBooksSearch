import React from "react";
import './search.css';
function Searchbar({ children }) {
  return (
    <div className="search">
       <div> <input placeholder="ermahgerd berks"/> </div><div><button>submit</button></div>
    </div>
  );
}

export default Searchbar;
