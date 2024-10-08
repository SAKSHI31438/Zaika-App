import React, { useEffect } from 'react'
import Header from './Header';
import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';


const RestaurantMenu = () => {
 
  const {resId}= useParams()

  const resInfo= useRestaurantMenu(resId)

  if(resInfo == null) return (<Shimmer/>) ;

  const {name, cuisines,areaName,city,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
 
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories)

  // console.log(itemCards);

  return  (
    <div className='text-center'>
       <Header/>
       <h1 className='font-bold my-6 text-2xl'>{name}</h1>
       <h2 className='font-bold  text-lg'>{cuisines.join(", ")}</h2>
      

       {/* accordian */}
       {categories?.map((category)=>(
        <ResCategory  key={category?.card?.card.title} data={category?.card?.card}
        />
       ))}
       
       
    </div>
  )
}

export default RestaurantMenu
