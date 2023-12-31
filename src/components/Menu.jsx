import React from 'react'
import MenuItem from './MenuItem'
import dataArray from '../data/items.json'
import { VscArrowUp } from 'react-icons/vsc'

const Menu = () => {
  return (
    <div>
      {/* iterating through the data.json and creating components using the MenuItem component */}
      <div className='relative min-w-full grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3'>
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
        {/* adding a fixed up arrow at the bottom right side of the screen */}
        <a className='text-[#00df9a] flex justify-end ms-9' href="#navbar">
          <VscArrowUp style={{ position: 'fixed', bottom: 9, right: 9, zIndex: 999,}} size={30} />
        </a>
    </div>
  )
}

export default Menu