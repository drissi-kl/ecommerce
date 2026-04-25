import { useQuery } from '@tanstack/react-query';
import { ChevronDown, ChevronRight, LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { getCategoriesApi } from '../../services/products';

export default function BottomHeader() {

    const [showCategories, setShowCategories] = useState(false);

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesApi
    })


    console.log('sdfas', location.pathname)



    return <main className='bg-blue-500 text-white font-semibold'>
        <div className='px-[200px]  flex justify-between  '>
            <menu className='flex relative  '>
                {
                    showCategories && <div className='absolute bg-white z-1 top-[50px] h-[300px] overflow-y-scroll shadow-2xl '
                        
                        >
                        <ul >
                            {
                                categories && categories.map((category, index) => {
                                    return <li className='hover:bg-blue-600 hover:text-white transition-all duration-300 px-6 py-2 text-gray-600 ' key={index} >{category.name}</li>
                                })
                            }
                        </ul>
                    </div>
                }

                <div className='py-2 px-3 hover:cursor-pointer flex gap-2'
                    onClick={() => setShowCategories(!showCategories)}
                >
                    Browse Category

                    {
                        showCategories ? <ChevronDown /> : <ChevronRight />
                    }


                </div>

                <div className={`py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ${location.pathname == "/" && 'bg-blue-600'}`} >Home</div>
                <div className={`py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ${location.pathname == "/about" && 'bg-blue-600'}`} >About</div>
                <div className={`py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ${location.pathname == "/accessories" && 'bg-blue-600'}`} >Accessories</div>
                <div className={`py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ${location.pathname == "/about" && 'bg-blue-600'}`} >Blog</div>
                <div className={`py-2 px-3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ${location.pathname == "/contact" && 'bg-blue-600'}`} >Contact</div>
            </menu>

            <div className='py-2 px-3 hover:cursor-pointer'>
                <LogOut />
            </div>

        </div>

    </main>
}
