import { ChevronDown, ChevronRight, LogOut } from 'lucide-react'
import React, { useState } from 'react'

export default function BottomHeader() {

    const [showCategories, setShowCategories] = useState(false);



  return <main className='bg-blue-500 text-white font-semibold'>
    <div className='px-[200px]  flex justify-between  '>
        <menu className='flex  '>
            <div className='py-2 px-3 hover:cursor-pointer flex gap-2'
                onClick={()=>setShowCategories(!showCategories)}
            >
                Browse Category

                {
                    showCategories ? <ChevronDown /> : <ChevronRight />
                }

                
            </div>

            <div className='py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 bg-blue-600' >Home</div>
            <div className='py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300' >About</div>
            <div className='py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300' >Accessories</div>
            <div className='py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300' >Blog</div>
            <div className='py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300' >Contact</div>
        </menu>

        <div className='py-2 px-3 hover:cursor-pointer'>
            <LogOut />
        </div>

    </div>

  </main>
}
