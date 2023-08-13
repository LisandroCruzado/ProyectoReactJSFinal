import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (count) => {
        addItem({ id: item.id, price: item.price, title: item.title, img: item.img }, count)
    };

    return (
<div className='container' id='productContainer'>
  <h1 className='text-center my-3 p-3'><b>{item.title}</b></h1>
  <div className='row justify-content-center align-items-center'>
    <div className='col-md-6'>
      <img src={item.img} className='rounded mx-auto d-block img_med' alt={item.nombre} />
    </div>
    <div className='col-md-6'>
      <div className='row'>
        <div className='col mt-4 mb-4'>
          <h5>Descripción</h5>
          <p>{item.description}</p>
          <h4 className='price'>${item.price}</h4>
          <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default ItemDetail