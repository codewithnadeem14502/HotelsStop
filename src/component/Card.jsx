import React from "react";
import "../App.css";
const Card = ({ name, place, items }) => {
  return (
    <div className="maincard">
      <div className="card">
        <div className="cardIner">
          <h2>Hotel Name : {name}</h2>
          <h3>Menu: {items}</h3>
        </div>
        <p>Addresss: {place}</p>
      </div>
    </div>
  );
};

export default Card;
