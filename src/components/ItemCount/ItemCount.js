import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock] = useState(stockItems);

  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container" id="itemcount">
      <div className="row" id="ajuste">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-dark" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-outline-dark">{counter}</button>
            <button type="button" className="btn btn-outline-dark" onClick={incrementarStock}>+</button>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <button type="button" className="btn btn-dark">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
