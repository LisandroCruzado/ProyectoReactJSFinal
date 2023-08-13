import React from 'react'
import { useState, useEffect } from 'react';

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spiner from '../Spinner/Spiner';

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  
  const [items, setItems] = useState([])
  const [load, setLoad] = useState(true)

  const getData = async (categoria) => {
    setLoad(true)
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'products'), where("categoryId", "==", categoria))
      : collection(querydb, 'products');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }

  useEffect(()=>{
      getData(categoriaId)
  },[categoriaId])

    return (
      <>
      <div className='container'>
        <div className='d-flex justify content-center mb'>
        {load ? <Spiner/> : <ItemList item={items} />}
        </div>
      </div>
      </>
    );
  };

export default ItemListContainer