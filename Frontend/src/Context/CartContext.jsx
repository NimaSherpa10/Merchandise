 import { createContext, useState } from "react";
import { PRODUCTS } from "../SampleData";

export const CartContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


export const CartContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
  
    //for totalamount in cart
    const getTotalAmount = () => {
        let totalamount = 0;
        for(const item in CartItems) {
            if(CartItems[item] > 0) {
                let info = PRODUCTS.find((product) => product.id === Number(item));
                totalamount += CartItems[item] * info.price;
            }
        }
        return totalamount;
    }
    const addToCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]:prev[ItemId] + 1}));
    }
    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]:prev[ItemId] - 1}));
    }

    const updateCartAmount = (newAmount, ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]:newAmount}));
    };
    const contextValue = {CartItems , addToCart, removeFromCart,updateCartAmount,getTotalAmount};

  return <>
    <CartContext.Provider value = {contextValue}>
        {props.children}
    </CartContext.Provider>
  </>
}
