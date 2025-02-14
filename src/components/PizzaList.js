import React from "react";
import Pizza from "./Pizza";

function PizzaList({ handleEdit, pizzaList }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaList.map((pizza) => (
            <Pizza handleEdit={handleEdit} key={pizza.id} pizza={pizza} />
          ))
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
