import React from 'react'

const HomePage = () => {


  return (
    // main page to be divided
    <div className='flex flex-col'>
        {/* header bar fixed */}
        <div className=' text-white flex flex-row gap-2 bg-black w-full h-16 p-3 justify-between'>
            <img src='./whiteLogo.png' className='h-12 w-auto p-3  hover:border border-white'/>
            <div className=' flex flex-row  gap-2 items-center justify-center  hover:border border-white p-2'>
                <img src="https://img.icons8.com/?size=100&id=3723&format=png&color=FFFFFF" className='fill font-white h-5 w-5' alt="" />
                <div className='flex flex-col text-white'>
                    <p className='text-[12px]'> Delivering to Mormugao 402305</p>
                    <h3 className='font-bold text-[14px] '>Update Location</h3>
                </div>   
            </div>
            {/* search bar and all dropdown */}
            <div className='flex flex-row w-[800px] items-center hover:border-2 border-yellow-400 rounded-lg'>
                <select className='text-black bg-gray-200 hover:border border-amber-400 rounded-l-lg h-full w-12'>
                    <option>All</option>
                    <option> Meow</option>
                </select>
                <input placeholder='Search' className=' !text-gray-400 p-2 bg-white h-full w-full'/>
                <button className='h-full bg-yellow-400 p-2 rounded-r-lg'>
                    <img className='h-full' src='https://img.icons8.com/?size=100&id=7695&format=png&color=1A1A1A'/>
                </button>
            </div>
            {/* lang */}
            <div className='flex flex-row items-center'>
                <img src='https://img.icons8.com/?size=100&id=32584&format=png&color=000000' className='h-6 w-6'/>
                <select>
                   <option>EN</option>
                   <option>EN</option>
                   <option>EN</option>
                   <option>EN</option> 
                </select>
            </div>

             <div className='flex flex-col text-white'>
                    <p className='text-[12px]'> Hello, sign in </p>
                     <select className='font-bold text-[14px] '>
                   <option>Account & Lists</option>
                   <option>EN</option>
                   <option>EN</option>
                   <option>EN</option> 
                </select>
            </div>   

            <div className='flex flex-col text-white'>
                    <p className='text-[12px]'> Returns</p>
                    <h3 className='font-bold text-[14px]  '>& Orders</h3>
                </div>
            <button className='flex flex-row items-end'>
                <img src='https://img.icons8.com/?size=100&id=9671&format=png&color=FFFFFF' className='h-10'/>
                <h3 className='font-bold text-[14px] '> Cart </h3>
            </button>
        </div>
        {/* options */}
        <div className='flex flex-row text-white h-10 w-full bg-gray-800 px-2 gap-4'>
            <div className='flex flex-row  p-2 gap-1'>
                <img src='https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF' className='h-full w-auto ' />
                <h3 className='font-bold'>All</h3>
            </div>
            <div className='flex flex-row items-center gap-4 w-full'>
                <h3 className=''>MX Player</h3>
                <h3 className=''>Sell</h3>
                <h3 className=''>Bestsellers</h3>
                <h3 className=''>Mobiles</h3>
                <h3 className=''>Today's Deals</h3>
                <h3 className=''>Prime</h3>
                <h3 className=''>Customer Service</h3>
                <h3 className=''>Fashion</h3>
                <h3 className=''>New Releases</h3>
                <h3 className=''>Amazon Pay</h3>
                <h3 className=''>Electronics</h3>
                <h3 className=''>Home & Kitchen</h3>
                <h3 className=''>Computers</h3>
                <h3 className=''>Cars & Motorbikes</h3>
                <h3 className=''>Books</h3>
            </div>
            
        </div>
        {/* filter area */}
        <div className='flex flex-row justify-between w-full h-10 shadow-md items-center p-2'>
            <p>1-16 of 459 results for <span className='text-orange-700 font-semibold'>"hp monitor"</span></p>
            <select className='bg-gray-200 h-full w-32'>
                <option> Sort by: Featured</option>
            </select>
        </div>

        {/* main page to show results*/}
        <div className='flex flex-col '>
            <h1 className=''> Results </h1>
            <p>Check each product page for other buying options.</p>
        </div>
    </div>
  )
}

export default HomePage