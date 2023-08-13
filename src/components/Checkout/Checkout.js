import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'; // Importa el archivo de estilos de Checkout

export const Checkout = () => {
    const [orderId, setOrderId] = useState();

    const [buyer, setBuyer] = useState({
      Nombre : "",
      Email : "",
      ConfirmarEmail : "", // Nuevo campo para confirmación de correo
      Telefono : ""
    });
    
    const { Nombre, Email, ConfirmarEmail, Telefono } = buyer;
    const { cart } = useContext(CartContext);

    const handleInputChange = (e) =>{
      setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar que los correos electrónicos coincidan
        if (Email === ConfirmarEmail) {
            const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0);
            const dia = new Date();
            const data = { buyer, cart, total, dia };
            generateOrder(data);
        } else {
            alert("Los correos electrónicos no coinciden. Por favor, ingrésalos nuevamente.");
        }
    }

    const generateOrder = async(data) =>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb,"Orders");
      const order = await addDoc(queryCollection,data);
      setOrderId(order.id);
    }

    return (
        <>
        <div className="container" id='checkoutContainer'>
            <h1 className='text-center my-3 p-3'><b>Formulario</b></h1>
            <hr />
            {!orderId && (
                <form onSubmit={handleSubmit} className='checkout-form'>
                    <input type="text"
                            name="Nombre"
                            placeholder='Nombre'
                            value={Nombre}
                            onChange={handleInputChange}
                            required/>
                    <br /><br />
                    <input type="email"
                            name="Email"
                            placeholder='Email'
                            value={Email}
                            onChange={handleInputChange}
                            required />
                    <br /><br />
                    <input type="email"
                            name="ConfirmarEmail"
                            placeholder='Confirmar Email'
                            value={ConfirmarEmail}
                            onChange={handleInputChange}
                            required />
                    <br /><br />
                    <input type="number"
                            name="Telefono"
                            placeholder='Telefono'
                            value={Telefono}
                            onChange={handleInputChange}
                            required />
                    <br /><br />
                    <input type="submit" value="Confirmar Compra" className='btn btn-primary'/>
                </form>
            )}
            {orderId && (
                <div className='text-center'>
                    <h2>Felicitaciones, tu compra se realizó con éxito</h2>
                    <h3>Tu Id de compra es: {orderId}</h3>
                </div>
            )}
        </div>
        </>
    )
}
