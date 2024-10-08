import React from "react";
import image from "../assets/foodcartlogo.jpg";

const Footer = () => {
  return (
    <div className="w-full bg-rgb(2, 6, 12) bg-black h-[500px] flex justify-center items-center">
      <div className="h-[350px] w-[70%]  flex justify-evenly items-center">
        <div className="h-[300px] w-[20%] ">
          <h1 className="font-serif text-white italic text-[30px] font-extrabold">
            Zaika
          </h1>
          <p className="text-gray-400 font-bold">© 2024</p>
        </div>
        <div className="h-[300px] w-[20%] ">
          <h1 className="font-serif text-white text-[20px] font-extrabold mb-3">
            Company
          </h1>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">About</p>
          </a>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Careers</p>
          </a>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Team</p>
          </a>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Zaika One</p>
          </a>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Zaika Instamart</p>
          </a>
          <a href="#">
            <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Zaika Genie</p>
          </a>
        </div>
        <div className="h-[300px] w-[20%] ">
          <div>
            <h1 className="font-serif text-white text-[20px] font-extrabold mb-3">
              Contact us
            </h1>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Help & Support</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Partner with us</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Ride with us</p>
            </a>
          </div>
          <br />
          <br />
          <div>
            <h1 className="font-serif text-white text-[20px] font-extrabold mb-3">
            Legal
            </h1>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Terms & Conditions</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Cookie Policy</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Privacy Policy</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300"> Investor Relation</p>
            </a>
          </div>
        </div>
        <div className="h-[300px] w-[20%] ">
        <h1 className="font-serif text-white text-[20px] font-extrabold mb-3">
        We deliver to:
            </h1>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Bangalore</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Gurgaon</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Hyderabad</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300"> Mumbai</p>
            </a>
            <a href="#">
              <p className="text-gray-400 font-bold mb-3 hover:text-gray-300">Pune</p>
            </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
