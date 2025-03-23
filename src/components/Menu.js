import React from "react";
import Pizza from "./Pizza";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "assests/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "assests/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "assests/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "assests/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "assests/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "assests/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  let pizzaDatalocal = pizzaData;
  // let pizzaDatalocal = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaDatalocal.length > 0 ? (
        <>
          <ul className="pizzas">
            {pizzaData.map((eachPizza) => (
              <Pizza pizza={eachPizza} />
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>We are working on our menu.Please come back after some time :) </p>
        </>
      )}
    </main>
  );
}
