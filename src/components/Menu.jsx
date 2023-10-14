import React from 'react'
import MenuItem from './MenuItem'
import dataArray from '../data/items.json'

const Menu = () => {
  return (
    <div className=''>
        <MenuItem imgUrl={dataArray[0].imgUrl} name={dataArray[0].name} bread={dataArray[0].bread} ingredients={dataArray[0].ingredients}/>
        <MenuItem imgUrl={dataArray[1].imgUrl} name={dataArray[1].name} bread={dataArray[1].bread} ingredients={dataArray[1].ingredients}/>
    </div>
  )
}

export default Menu