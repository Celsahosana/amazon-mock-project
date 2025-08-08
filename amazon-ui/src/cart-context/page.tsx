'use client'

import React, {createContext, useContext, useState, ReactNode} from "react"

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({children}: {children: ReactNode}) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
  return (
    <div>CartContext</div>
  )
}

export default CartProvider