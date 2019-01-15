import React from "react";
import './search.css';
function Searchbar({ children }) {
  return (
    <div className="search">
       <div> <input placeholder="SEARCH books"/> </div><div><button>submit</button></div>
    </div>
  );
}

export default Searchbar;
