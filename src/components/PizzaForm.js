import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, onSubmit }) {
  const [initialFormData, setInitialFormData] = useState({
    id: 0,
    topping: "",
    size: "",
    vegetarian: false,
  });

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (pizza) {
      setFormData({
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [pizza, initialFormData]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleRadioChange(event) {
    const { name, value } = event.target;
    const isVegetarian = value === "Vegetarian";
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: isVegetarian,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!formData.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
