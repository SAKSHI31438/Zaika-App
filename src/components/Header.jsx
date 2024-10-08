import React from "react";
import image from "../assets/foodcartlogo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { FaUser } from "react-icons/fa";


const Header = () => {
 
  const user = useSelector(store => store?.user)
  const navigate = useNavigate()

  const [btnName, setBtnName] = useState("Login");

  const changeBtnName = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const cartItems = useSelector((store) => store.cart.items);

  const loginHandler = () => {
    if(user.length) {
      signOut(auth)
      .then(() => {
        navigate("/")
        // setLogin("login")
        // console.log(login);
        // alert("user logged out")
      })
      .catch((error) => {
        navigate("/error")
      })
    }
  }

  return (
    <div className="bg-white  w-[100%] flex justify-between m-auto border-1 border-black  border-solid shadow-md h-[80px] ">
      <div className="ml-[1%]">
        <img
          src={image}
          alt=""
          className="md:w-[100px] w-[200px] h-[50px] items-center mt-3"
        />
      </div>
      <ul className="flex md:gap-[50px] items-center text-[18px]  mr-[1%] gap-[20px]">
        <Link to={"/"} className="flex hover:text-red-900">
          <FaHome className="m-1 md:w-[30px] w-[10px] h-[20px] items-center" />
          <li className="hover:text-red-900 font-semibold items-center">
            Home
          </li>{" "} 
        </Link>
        <Link to={"/about"} className="flex items-center hover:text-red-900">
          <IoInformationCircle className="m-1 w-[30px] h-[25px]" />
          <li className="hover:text-red-900 font-semibold  items-center">
            About Us
          </li>{" "}
        </Link>
        <Link to={"/contactUs"} className="flex items-center hover:text-red-900">
          <MdContactPage className="m-1 w-[30px] h-[25px]" />
          <li className="hover:text-red-900 font-semibold  items-center">
            Contact Us
          </li>{" "}
        </Link>
        <Link to={"/Cart"} className="flex items-center hover:text-red-900">
          <FaShoppingCart className="m-1 w-[30px] h-[25px]" />
          <li className="hover:text-red-900 font-semibold  items-center">
            Cart({cartItems.length})
          </li>{" "}
        </Link>
        <Link to={"/login"} className="items-center hover:text-red-900 cursor-pointer">
          <button
            onClick={loginHandler}
            className=" pt-[10px] pb-[10px] pl-[20px] pr-[20px]  hover:text-red-900 font-semibold items-center cursor-pointer"
          >
            {user.length ? <div className="flex cursor-pointer"> Log out <FaUser className="ml-2 w-[30px] h-[23px] "/>
              </div>: "Login"}
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
