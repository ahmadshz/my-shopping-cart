import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    // Load cart from local storage or initialize as an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            // if product already exists, increase count
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, count: 1 }];
        });
    };

    // Remove product from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Increase product quantity
    const plus = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    // Decrease product quantity
    const minus = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, count: item.count > 1  ? item.count - 1 : 1 }
                        : item
                )
                .filter((item) => item.count > 0)
        );
    };

    // Remove all Product in Cart
    const removeAllProduct = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, plus, minus ,removeAllProduct }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use Cart Context
export const useCart = () => useContext(CartContext);
