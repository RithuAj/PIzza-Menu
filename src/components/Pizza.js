import React from 'react'

export default function Pizza(props) {
  return (
    <li >
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{props.pizza.soldOut ? "SOLD OUT" : props.pizza.price}</span>
      </div>
    </li>
  )
}
