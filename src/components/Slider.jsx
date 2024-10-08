import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SliderCards from './SliderCards';

const Slider = () => {
  const [Title, setTitle]= useState([]);
  const [listofItem, setListofItem]= useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  
 const fetchData= async ()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json);
  setTitle(json?.data?.cards[0]?.card?.card?.header?.title)
  setListofItem(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
 }



  return (
    <div>
      <h3 className='ml-20 font-bold text-[30px]'>{Title}</h3>
      <div className='flex  w-[92%] ml-20 overflow-x-scroll scrollbar-hide'>
        {listofItem?.map((Card)=>{
          return(
          <SliderCards cardData={Card} />);
        })}

      </div>
      
    </div>
  )
}

export default Slider
