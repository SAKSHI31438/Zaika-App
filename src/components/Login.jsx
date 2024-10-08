import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { CheckValidData } from '../utils/checkValidation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg]=useState(null)


  const logInHandler=() =>{
   const message= CheckValidData(email.current.value,password.current.value)
   setErrorMsg(message)
   if(message) return;

   signInWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value
  )
    .then((userCredential) => {
      // logged in
      const user = userCredential.user;
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg("User Not Found. Please Sign Up")
      
    });

  }


  return (
    <form  onSubmit={(e)=>e.preventDefault()}>
      <div className='m-auto  bg-white-200 w-[500px] h-[500px] mt-20  rounded-lg p-2 border-0 border-black shadow-2xl'>
        <h1 className='text-center font-bold m-2 text-2xl '>LOG IN </h1>
        <div className='m-10 '>

        <h2 className='mb-2 text-xl'>Enter Email Address</h2>
        <input 
        ref={email}
        className='bg-zinc-300 w-full h-[40px] rounded-md mb-5 pl-2 border outline-none'
        
         type="text" placeholder='Enter Email Address' />
        
        <h2 className='mb-2 text-xl'>Enter Password</h2>
        <input
        ref={password}
         className='bg-zinc-300 w-full h-[40px] rounded-md mb-4 pl-2 border outline-none'
        
         type="password" placeholder='Enter Password'/>
          
        <p className='text-red-700 text-center' >{errorMsg}</p>
         

        <button onClick={logInHandler}
        className='bg-blue-500 w-full h-[40px] rounded-lg text-xl cursor-pointer mt-2'
        >Log in</button>
        
          
        <div className='flex mt-2'>

        <p>Not have an Account?</p>
        <Link to={"/signUp"}>
          <span className='text-blue-800 ml-2 cursor-pointer'> Create new account </span>  </Link>
        </div>
        </div>
              
      </div>
    </form>
  )
}

export default Login
