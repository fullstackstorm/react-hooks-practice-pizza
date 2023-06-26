import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then((r) => r.json())
      .then((data) => setPizzaList(data));
  }, []);

  function handlePizzaEdit(pizza) {
    setPizza(pizza);
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizza} />
      <PizzaList handleEdit={handlePizzaEdit} pizzaList={pizzaList} />
    </>
  );
}

export default App;
