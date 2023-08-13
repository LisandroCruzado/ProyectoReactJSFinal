import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import carrito from '../../assets/images/cartera.png'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <div className='cartera'>
        <Link to="/cart">
          <img src={carrito} alt='Imagen del carrito' />
          <button style={{ backgroundColor: '#e4c360', border:'none'}}>{getQuantity()}</button>
        </Link>
    </div>
  )
}

export default CartWidget