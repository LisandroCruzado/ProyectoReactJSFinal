import React, { useState } from 'react';
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
 
  const incrementar = () => {
    if(count<stock){
      setCount(count+1)
    }
  }
  const decrementar = () => {
    if(count>initial){
      setCount(count-1)
    }
  }
  
  return (
    <div className="container" id="itemcount">
      <div className="row" id="ajuste">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button onClick={() => decrementar()} className='btn btn_item_count'   >-</button>
            <h3>{count}</h3>
          <button onClick={() => incrementar()} className='btn btn_item_count' >+</button>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
        <button className="btn btn-dark"  onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
export default ItemCount;
