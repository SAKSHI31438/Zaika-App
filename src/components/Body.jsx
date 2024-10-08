import React, { useEffect, useState } from 'react'
import Card ,{withPromotedlabel} from './Card'
import Loading from './Loading';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { IoSearch } from "react-icons/io5";
import Slider from './Slider';
import Footer from './Footer';


const Body = () => {

    const [searchText, setSearchText ]= useState("");
    const [listofRes, setListofRes]= useState([]);
    const [filteredRest, setFilteredRest]=useState([]);

    const RestaurantCardPromoted =withPromotedlabel(Card);

    useEffect(()=>{
      fetchData();
    },[]);
    

    
   const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    // console.log(json);
    setListofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   }

  //myapi
  // const fetchData= async ()=>{
  //   const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=20.3893155&lng=72.9106202");
  //   const json= await data.json();
  //   console.log(json);
  //   setListofRes(json?.data?.success.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   
  //  }
  
  // console.log(listofRes);

  const onlineStatus= useOnlineStatus();
  if(onlineStatus == false) {
    return (
    <h1 className='text-red-500 mt-[20%] flex  justify-center items-center '>Looks Like you're Offline!! Please check your internet connection...</h1>
  )
  }

  return  listofRes?.length == 0 ? (<Shimmer/>)  : (
    <div >
       <div className='p-[10px] lg:flex md:flex sm:flex'>
           {/* search button */}
           <div className='ml-[5%] lg:flex md:flex sm:flex'>
             <input  className='lg:w-[600px] bg-zinc-300 rounded-lg h-[40px] pl-[2%] mt-2 focus:outline-none md:w-[300px] sm:w-[200px]'
             type="text" placeholder='Search for Restaurants' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />

             <button onClick={()=>{
              const filterres=listofRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
              setFilteredRest(filterres)
             }}
             className='w-[50px] h-[40px]  rounded-lg ml-[5px] font-bold inline-block mt-2 p-1'><IoSearch className='lg:h-[30px] inline-block w-[27px] mr-2 '/></button>

             <div>
                  <button className='w-[200px] h-[60px]  cursor-pointer ml-[300px] mb-5 font-bold hover:scale-110  ease-in duration-130 hover:text-red-900 ' 
                onClick={()=>{
                  const filterList= listofRes?.filter((res)=> res?.info?.avgRating > 4);
                  setListofRes(filterList);
                }}
                >Top Rated Restaurant</button>
             </div>

           </div>
          
       </div>
       
       <div className='ml-[5%] flex flex-wrap gap-[20px]'>{
        filteredRest?.map((restaurant)=> (
        <Link key={restaurant?.info?.id} 
        to={`/restaurants/${restaurant?.info?.id}`}>

          {
            restaurant?.info?.promoted ? (<RestaurantCardPromoted resData ={restaurant}/>) :
            (<Card resData={restaurant}/>)
          }
        </Link>
        ))}
       </div>
       <Slider/>
       <br></br>
       <br />
       <br /><br />
       <Footer/>
       
       
    </div>
  );
}

export default Body;
