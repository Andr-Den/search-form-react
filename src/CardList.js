import React from 'react';
import Card from './Card';

function CardList({names}) {
  return (
    <ul>
      {names.map((item, index) => (
        <Card name={item.name} key={index}/>
      ))}
    </ul>
  )
}

export default CardList;