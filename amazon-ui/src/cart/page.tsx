// CartDrawer.tsx

import { useState } from "react"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartDrawer = ({isOpen, onClose}: CartDrawerProps) => { 

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [ loading, setLoading] = useState(true);
  const [ error, setError] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-300/60 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>

        <div className="p-4">
          {/* You can map your cart items here */}
          <p>No items yet</p>
          {/* item added to cart */}
          <div className='w-full p-2 border border-gray-300 h-40 flex flex-row gap-2'>
              <img src='../hamster1.jpeg' className=''/>
              <div className='flex flex-col gap-2'>
                <h1 className="font-semibold text-lg"> Title and description</h1>
                {/* stars */}
                {/* price */}
                <p>Price: 1200000</p>
                {/* mrp */}
                {/* gert it by */}
                <div className='flex flex-row items-center gap-1' >
                  <button className="qty">-</button> 
                  <p> 1</p>
                  <button className="qty">+</button>
                </div>
                <button className="cancel-btn" >Remove</button>
                
              </div>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default CartDrawer
