import React from 'react';
import "./Card.css"

const Card = ({ classfication, id, name }) => {

  return(
    <div className="single-poke">
      <p>{name}</p>
      <p>{classfication}</p>
      <p>{id}</p>
    </div>
  )


}

export default Card;
