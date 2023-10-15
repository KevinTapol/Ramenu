import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import dataArray from '../data/items.json'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
<div id='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative'>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ramsey Menu</h1>

    {/* hamburger menu useState logic for open close */}
    {/* <div onClick={handleNav} className='flex flex-end'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div> */}
    <div onClick={handleNav} className='flex flex-end text-[#00df9a]' style={{ position: 'fixed', top: 9, right: 9, zIndex: 999,}} >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>


    <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'} style={{ zIndex: 999 }}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Sandwich Menu</h1>

        <div className='m-2 flex flex-col'>
            {dataArray.map((item, index) => (
                <a onClick={handleNav} className='flex-center text-[#00df9a] m-1' key={index} href={`#${item.id}`}>{item.name}</a>
            ))}
        </div>
    </div>
</div>

    // <div id='navbar' className=' flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    //     <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ramsey Menu</h1>

    //     {/* hamburger menu useState logic for open close */}
    //     <div onClick={handleNav} className='block sticky top-0'>
    //         {nav ? <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20} />}
    //     </div>
        
    //     <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    //         <h1 className='flex flex-start w-full text-3xl font-bold text-[#00df9a] m-4'>Sandwich Menu</h1>

    //         <div className='fixed m-2 flex flex-col'>
    //             {dataArray.map((item, index) => (
    //                 <a onClick={handleNav} className='flex-center text-[#00df9a] m-1' key={index} href={`#${item.id}`}>{item.name}</a>
    //             ))}
    //         </div>
    //     </div>
    // </div>
  )
}

export default Navbar