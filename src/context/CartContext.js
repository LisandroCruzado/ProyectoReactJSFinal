import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cant) => {
        // Verificar si el artículo ya está en el carrito
        const existingItemIndex = cart.findIndex(existingItem => existingItem.id === item.id);

        if (existingItemIndex !== -1) {
            // El artículo ya existe, actualiza la cantidad y el total
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].cant += cant;
            updatedCart[existingItemIndex].total = updatedCart[existingItemIndex].cant * item.price; // Calcula el total
            setCart(updatedCart);
        } else {
            // El artículo no existe, agrégalo al carrito con cantidad y total
            setCart([...cart, { ...item, cant, total: cant * item.price }]);
        }
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.cant, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
