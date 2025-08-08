'use client'
import { useState } from 'react';
import Navbar from '../navbar/page';
import Products from '../products/page';
import CartDrawer from '../cart/page';



export default function HomePage () {
    const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    // main page to be divided
    <div className='flex flex-col'>
        {/* header bar fixed */}
       <Navbar onCartClick={() => setIsCartOpen(true)}/>
      <CartDrawer isOpen={isCartOpen} onClose={()=>setIsCartOpen(false)}/>
        {/* main page to show results*/}
       <Products />

    </div>
  )
}

