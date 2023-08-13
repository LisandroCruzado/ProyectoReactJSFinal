import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cant) => {
        const existingItemIndex = cart.findIndex(existingItem => existingItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].cant += cant;
            updatedCart[existingItemIndex].total = updatedCart[existingItemIndex].cant * item.price;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, cant, total: cant * item.price }]);
        }
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.cant, 0);
    };

    const clearCart = () =>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
