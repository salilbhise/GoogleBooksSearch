import React from "react";
import './card.css';

function Card(props) {
  return (
    <div className="card">
           {props.name}
    </div>
  );
}

export default Card;
