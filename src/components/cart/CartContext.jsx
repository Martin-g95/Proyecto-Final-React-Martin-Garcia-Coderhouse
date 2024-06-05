import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {
        setCart(prevCart => {
            let productExists = false;
            const updatedCart = prevCart.map(item => {
                if (item.id === producto.id) {
                    productExists = true;
                    const newQuantity = item.cantidad + producto.cantidad;
                    if (newQuantity > producto.stock) {
                        console.log(`No puedes agregar más de ${producto.stock} unidades de este producto.`);
                        return item;
                    } else {
                        return { ...item, cantidad: newQuantity };
                    }
                }
                return item;
            });

            if (!productExists) {
                if (producto.cantidad > producto.stock) {
                    console.log(`No puedes agregar más de ${producto.stock} unidades de este producto.`);
                    return prevCart; // Do not add if it exceeds the stock
                } else {
                    updatedCart.push(producto);
                }
            }

            return updatedCart;
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
