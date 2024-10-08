import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useRef, useState } from 'react';
import { CheckValidData } from '../utils/checkValidation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const SignUp = () => {
  const navigate = useNavigate();
  
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg]=useState(null)

  
  const signUpHandler=() =>{
   const message= CheckValidData(email.current.value,password.current.value)
   setErrorMsg(message)
   if(message) return;
  
   //signUp
   createUserWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  }


  return (
    <form  onSubmit={(e)=>e.preventDefault()}>
      <div className='m-auto  bg-white-200  w-[500px] h-[520px] mt-20  rounded-lg p-2 border-0 border-black shadow-2xl'>
      <h1 className='text-center font-bold m-2 text-2xl'>SIGN UP</h1>
      <div className='m-10 '>
        <h2 className='mb-2 text-xl'>Enter Name</h2>
        <input 
        ref={userName}
        className='bg-zinc-300 w-full h-[40px] rounded-md mb-5 pl-2 border outline-none'
         type="text" placeholder='Enter Name' />
        
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

        <button onClick={signUpHandler}
        className='bg-blue-500 w-full h-[40px] rounded-lg  text-xl cursor-pointer mt-2'>Sign Up</button>
          
        <div className='flex mt-2'>

        <p>Already have an Account?</p>
        <Link to={"/login"}>
          <span className='text-blue-800 ml-2 cursor-pointer text-center'> Login to your Account</span>  </Link>
        </div>
        </div>
       
       
              
      </div>
    </form>
  )
}

export default SignUp
