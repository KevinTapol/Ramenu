import React from 'react'
import MenuItem from './MenuItem'
import dataArray from '../data/items.json'
import { VscArrowUp } from 'react-icons/vsc'

const Menu = () => {
  return (
    <div>
      <div className='relative min-w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            {dataArray.map((item, index) => (
            <MenuItem
              id={`${item.id}`}
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              bread={item.bread}
              ingredients={item.ingredients}
            />
          ))}
        </div>
        <a className='text-[#00df9a] flex justify-end ms-6' href="#navbar">
          <VscArrowUp size={30} />
        </a>
    </div>
  )
}

export default Menu