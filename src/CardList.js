import React from 'react';
import Card from './Card';
import "./CardList.css"

function CardList({names}) {
  return (
    <ul className="cardlist">
      {names.map((item, index) => (
        <Card name={item.name} key={index}/>
      ))}
    </ul>
  )
}

export default CardList;