import React from "react";
import "./Card.css";

const Card = ({main, detail, color}) => {
  const technologies = detail.split(', ');
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span>{main}</span>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Card;
