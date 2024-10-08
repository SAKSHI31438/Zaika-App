import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ItemList = ({ items }) => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const { resId } = useParams();
  const dispatch = useDispatch();

  const handleAdditem = (item,itemName) => {
    dispatch(addItem(item));
    toast.success(itemName+" Added to Cart!!");
  };
  const onClickHandler = (items, itemName) => {
    console.log(itemName)
    const filter = cartItems?.filter((item) => item?.card?.info?.id != items);
    console.log(filter);
    dispatch(removeItem(filter && filter));
    toast.error(`${itemName} removed to Cart!!`);
  };

  return (
    <div>
      <div>
        {items?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 bg-white rounded-lg flex justify-between"
          >
            <div className="w-[80%] ">
              <div className="text-left mb-2 font-semibold">
                <span className="py-2 ">{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-left italic mt-4">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className=" w-[25%] h-auto">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
                className="w-[60%] text-right h-auto ml-[30%] rounded-lg"
              />
              <div className="absolute  my-[-28px] ml-3">
                {resId ? (
                  <button
                    className="p-1 bg-gray-400 shadow-lg mx-[58px]  rounded-lg w-[143px] font-bold hover:bg-green-600"
                    onClick={() => handleAdditem(item,item?.card?.info?.name)}
                  >
                    {resId ? "ADD +" : "Remove"}
                  </button>
                ) : (
                  <button
                    onClick={() => onClickHandler(item?.card?.info?.id, item?.card?.info?.name)}
                    className="p-1 bg-gray-400 shadow-lg mx-[38px]  rounded-lg w-[100px] font-bold hover:text-red-900"
                  >
                    {resId ? "ADD +" : "Remove"}
                  </button>
                )}

                <Toaster
                  containerStyle={{
                    top: '15%',
                    left: '83%',
                    
                  }}
                  className="mt-[100px] font-semibold italic absolute left-[100px] top-10"
                />
                {/* <Toaster className="mt-[100px] font-semibold italic" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
