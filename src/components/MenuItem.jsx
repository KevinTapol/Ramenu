import React from 'react'

const MenuItem = ({id, imgUrl ,name ,bread , ingredients}) => {
  return (

    <div className='max-w-[450px] h-[450px] w-full m-auto py-16 px-4 relative group' > 
        <img className='object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500' src={imgUrl} alt="" />
        <div className='bg-white/90 rounded-sm my-1' >
            <h2 className='text-xl font-bold border-b border-gray-600' >
                {name}
            </h2>
            <h2 className='text-sm border-b border-gray-600' >{bread}</h2>
            <h2>{ingredients}</h2>
        </div>
    </div>
    // <div className='py-5 flex flex-col' > 
    //     <img className='max-w-[148vh] rounded-sm mx-auto' src={imgUrl} alt="" />
    //     <div className='bg-white/90 rounded-sm my-1' >
    //         <h2 className='text-xl font-bold border-b border-gray-600' >
    //             {name}
    //         </h2>
    //         <h2 className='text-sm border-b border-gray-600' >{bread}</h2>
    //         <h2>{ingredients}</h2>
    //     </div>
    // </div>
  )
}

export default MenuItem