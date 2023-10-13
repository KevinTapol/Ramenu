import React from 'react'

const MenuItem = ({id, imgUrl ,name ,bread , ingredients}) => {
  return (

    <div className='py-5 flex flex-col' > 
        <img className='max-w-[50vh] rounded-xl' src={imgUrl} alt="" />
        <div className='' >
            <h2 className='text-xl font-bold' >
                {name}
            </h2>
            <h2 className='text-sm' >{bread}</h2>
            <h2>{ingredients}</h2>
        </div>
    </div>
  )
}

export default MenuItem