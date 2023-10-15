import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import dataArray from '../data/items.json'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ramsey Menu</h1>
        {/* <a href="#ramsey_hot_chicken_sandwich" className='text-blue-500 cursor-pointer' >Ramsey Hot Chicken Sandwich</a> */}

        {/* hamburger menu useState logic for open close */}
        <div onClick={handleNav} className='block'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile menu for screens under 768px */}
        
        <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Sammich Menu</h1>

            <div className='m-2 flex flex-col'>
                <a href="#ramsey_hot_chicken_sandwich" className='text-blue-500 cursor-pointer' >Ramsey Hot Chicken Sandwich</a>
                <a href="#special" className='text-blue-500 cursor-pointer' >Special</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar