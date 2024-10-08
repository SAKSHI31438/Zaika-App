import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";



const Cart = () => {
   
  const cartItems =  useSelector((store)=> store.cart.items)

  const dispatch = useDispatch();

  const handleClearitem = (item) =>{
   dispatch(clearCart(item));
   toast.success("Cart is cleared!!");
  }
 
  let total = [];
  total = cartItems?.map(
    (cart) => cart?.card?.info?.price || cart?.card?.info?.defaultPrice
  );
  const sum = total?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const payHandler =()=>{
    
    alert("your payment is successfull, items are ordered");
    dispatch(clearCart());
    toast.success("Payement succesfull!!")
  }

  return (
    <div>
      <Header></Header>
     
      <div className=' text-center m-4 p-4'>
      {/* <h1 className='text-2xl font-bold'>Cart</h1> */}
      <div className='w-6/12 m-auto'>
      
      <ItemList items={cartItems}></ItemList>
       {/* <button className='bg-gray-400 w-[100px] h-[30px] rounded-lg ml-[80%] '
        onClick={handleClearitem}
        >Clear Cart</button>  */}
        {/* {cartItems.length==0 ?
         (<h1 className='m-10 font-bold text-2xl text-red-600'>Your cart is empty! Please Add items to cart...</h1>)
         :(<button className='bg-gray-400 w-[100px] h-[30px] rounded-lg ml-[80%] '
        onClick={handleClearitem}
        >Clear Cart</button>)} */}
        {cartItems?.length ?  (
          <div>  
            <button className='border-gray-400 border-[1px] w-[120px] h-[50px] rounded-lg ml-[78%] font-bold mt-3 hover:bg-gray-400'
            onClick={handleClearitem}
            >Clear Cart</button>

          <div className="w-full border-b-4">
            <div className="w-full flex justify-between px-6 py-6  mt-6  shadow-2xl shadow-gray-800 h-[70px]">
              <span className="inline-block text-xl font-bold text-black">
                TO PAY
              </span>
              <span className="flex text-xl font-bold text-black items-center ">
              <FaRupeeSign></FaRupeeSign>
                {sum ? sum / 100 : "00"}
              </span>
            </div>
            <hr></hr>
            <div className="px-6  bg-white w-full py-2 flex flex-row-reverse ">
              <div className="flex  items-center bg-green-600 rounded-md font-semibold gap-1 cursor-pointer text-white w-32 px-3 py-2 hover:opacity-[0.95]" onClick={payHandler}>
              PAY <FaRupeeSign></FaRupeeSign>
              {sum ? sum / 100 : "00"}
              
              </div>
              {/* <ToastContainer className="mt-[100px] font-semibold italic"/> */}
            </div>
          </div>
          </div>
        ):((
          <div className="text-center">
            <FaCartPlus className="h-[32%] w-[32%] mx-auto text-zinc-300"/>
            <h1 className='m-10 font-bold text-2xl text-red-900'>Your cart is empty! Please Add items to cart...</h1>
            <br></br>
            <Link to={"/"}>
            <button className='p-3  text-black rounded-lg font-semibold shadow-md shadow-black border-gray-400 border-[1px] hover:bg-gray-400'>See Restaurants</button></Link>
          </div>
        ))}
        
        
                <Toaster
                  containerStyle={{
                    top: '15%',
                    left: '83%',
                    
                  }}
                  className="mt-[100px] font-semibold italic absolute left-[100px] top-10"
                />       
      </div>
      
     </div>
    
        
    </div>
  )
}

export default Cart
