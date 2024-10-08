import React, { useState } from 'react'
import ItemList from './ItemList'
import { FaArrowDown } from "react-icons/fa";

const ResCategory = (data) => {
  // console.log(data)

  const [showItems, setShowItems]= useState(false);

  const handleClick=()=>{
      setShowItems(!showItems)
  }
  return (
    <div>
    <div className='w-[70%] m-auto h-[20%] bg-gray-50 shadow-xl p-4 my-4 mb-7 rounded-lg'>
      <div className='flex justify-between font-bold cursor-pointer h-[20%]' onClick={handleClick}> 
       <span className='text-md'>{data?.data?.title} ({data?.data?.itemCards?.length})</span>
       <span><FaArrowDown className='h-[25px]'/></span>
      </div>
      {showItems && <ItemList items={data?.data?.itemCards}/>}
    </div>

    </div>
  )
}

export default ResCategory
