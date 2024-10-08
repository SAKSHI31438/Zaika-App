import React from 'react'
import {CDN_URL} from '../utils/constants';
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  const {resData}= props;
  const {cloudinaryImageId, name, avgRating,cuisines, costForTwo,deliveryTime}=resData?.info;
  return (
    <div className='w-[250px] h-[400px]  border-black    rounded-t-xl cursor-pointer hover:scale-90 ease-in duration-150  hover:border-red-900 hover:border-b-[3px] '>
        
        <img src={CDN_URL + cloudinaryImageId}  alt="" className='h-[50%] w-full rounded-xl mb-[2px]'/>
        <h3 className='pl-[10px] pb-[3px] font-bold mt-2'> {name}</h3>
        <h4 className='pl-[10px] pb-[3px]'> {cuisines.join(", ")}</h4>
        <h4 className='pl-[10px] text-green-600 pb-[3px] flex font-bold'>{avgRating} <FaStar  className='mt-1 ml-2'/></h4>
        <h4 className='pl-[10px] pb-[3px]'>{costForTwo} </h4>
        {/* <h4 className='pl-[10px] pb-[3px]'>{deliveryTime} mins</h4> */}

    </div>
  );
}

 export  const withPromotedlabel=(Card)=>{
    return (props)=>{
     return (
      <div>
        <label> Promoted</label>
        <Card {...props}/>
      </div>
     )
    }
  }

export default Card
