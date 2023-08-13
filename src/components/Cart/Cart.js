import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Importa el archivo de estilos de Cart

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState(cart);

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className='container' id='productContainer'>
      <h1 className='text-center my-3 p-3'><b>Carrito</b></h1>
      {cartItems.length === 0 ? (
        <h1 className='text-center'>Carrito Vacío</h1>
      ) : (
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <ul className='list-group'>
              {cartItems.map(unItem => (
                <li key={unItem.id} className='list-group-item d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <img src={unItem.img} className='rounded img-small' alt='Imagen del producto' />
                    <h4 className='ml-3'>{unItem.title}</h4>
                  </div>
                  <div className='cart-item-price'>
                    <p><span className='cantPrecio'>Cantidad :</span>   <span className='cantYtotal'>{unItem.cant}</span></p>
                    <p><span className='cantPrecio'>Precio:</span>   <span className='cantYtotal'>${unItem.total.toFixed(2)}</span></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className='text-center mt-4'>
        <button className='btn btn-outline-dark' onClick={handleEmptyCart}>Vaciar Carrito</button>
        &nbsp;{/* Agrega un espacio */}
        <Link to='/checkout'>
          <button className='btn btn-dark'>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};
