import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then((r) => r.json())
      .then((data) => setPizzaList(data));
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzaList={pizzaList} />
    </>
  );
}

export default App;
