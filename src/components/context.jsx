import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const Context = createContext(null);

const checkoutCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] =0
    }
    return cart
}

export const ContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(checkoutCart())

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id]  - 1}))
    }

    const updateCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const totalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem, totalCartAmount}
    

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
