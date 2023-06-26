import React from "react";

function Pizza({ handleEdit, pizza }) {
  const { topping, size, vegetarian } = pizza;
  const vegDisplay = vegetarian ? "Yes" : "No";

  function handleClick() {
    handleEdit(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegDisplay}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
