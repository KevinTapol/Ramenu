import React from 'react'

const MenuItem = ({id, imgUrl ,name ,bread , ingredients}) => {
  return (

    <div className='py-5' > 
        <img className='max-w-[50vh] mx-auto rounded-xl' src={imgUrl} alt="" />
        <div className='' >
            <h3 className='' >
                {name}
            </h3>
            <h3>{bread}</h3>
            <h4>{ingredients}</h4>
        </div>
    </div>
  )
}

export default MenuItem