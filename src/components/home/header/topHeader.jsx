import { Heart, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function TopHeader() {
  return <main className='flex justify-between px-[200px] py-1'>
    <div className='w-[100px] '>
        <img src="/logo.png" alt="logo" />
    </div>

    <div className='flex items-center  basis-[300px] '>
        <div className='flex items-center border border-blue-500 rounded-2xl overflow-hidden w-[100%]'>

            <input type="text" placeholder='search ...' 
                className='focus:outline-0  w-[100%] px-2 py-1'
            /> 
            
            <button className='bg-blue-500 p-2 h-[100%] '>
                <Search color='white'  />
            </button>

        </div>
        
    </div>

    <div className='flex gap-3'>
        <div className='relative p-2 '>
            <Heart />
            <div className='bg-blue-500 text-white flex justify-center items-center rounded-full w-[20px] h-[20px] text-sm absolute top-0 right-0  '>
                0
            </div>
        </div>
        <div className='relative p-2 '>
            <ShoppingCart />
            <div className='bg-blue-500 text-white flex justify-center items-center rounded-full w-[20px] h-[20px] text-sm absolute top-0 right-0  '>
                0
            </div>
        </div>
    </div>
  </main>
}
