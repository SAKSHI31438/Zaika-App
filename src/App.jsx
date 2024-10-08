import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Cart from './components/Cart'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from "./utils/firebase";
import { useEffect } from 'react'
import { addUser, removeUser } from './utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import FormSubmit from './components/formSubmit'


 

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        console.log(uid, email, displayName)
        navigate("/")
        dispatch(addUser(uid));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    return () => unscubscribe(); // Clean up function when component unmounts
  }, [])

 

  return (
    <div>
      <Routes>
           <Route path="/" element={<Home/>} errorElement={<Error/>} ></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/contactUs" element={<ContactUs/>}></Route>
           <Route path="/restaurants/:resId" element={<RestaurantMenu/>}></Route>
           <Route path="/Cart" element={<Cart/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signUp" element={<SignUp/>}></Route>
           <Route path="/submitted" element={<FormSubmit/>}></Route>
      </Routes>
    </div>
    
  )
}
// const appRouter=createBrowserRouter((
//   {
//   path:"/",
//   element:<App/>,
//  },{
//   path:'/about',
//   element:<About/>,
//  }
// ))


export default App
