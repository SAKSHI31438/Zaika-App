import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div>
      <Header/>
      <div className='m-auto w-[80%] h-full   mt-5 p-8'>
         <h2 className='text-2xl italic text-center font-bold '>Welcome to <span className='text-red-950 italic'>Zaika</span>!</h2>
         <p className='mt-10 text-lg'>At <span className='text-red-950 italic'>Zaika</span>, we're more than just a food delivery service—we're your culinary partner in making life a little easier and a lot tastier , our mission is to connect you with the best local eateries and help you enjoy your favorite meals without the hassle.</p>
         <br></br>
         <br></br>
         <h2 className='text-2xl font-bold'>Who We Are</h2>
         <p  className='mt-2 text-lg'>We’re a passionate team of food lovers, tech enthusiasts, and local community advocates dedicated to revolutionizing the way you experience food. Our journey began with a simple idea: to make it effortless for you to savor delicious meals from your favorite restaurants, all from the comfort of your home or office.</p>

         <h2 className='text-2xl font-bold mt-5'>Our Vision</h2>
         <p  className='mt-2 text-lg'>We envision a world where great food is always within reach. Whether you're craving a quick bite, a gourmet feast, or something in between, our goal is to bring you exceptional dining experiences with speed, convenience, and reliability.</p>

         <h2 className='text-2xl font-bold mt-5'>What Sets Us Apart</h2>
         <p className='mt-2 text-lg'>Local Partnerships: We collaborate with a diverse range of restaurants, from beloved local gems to renowned dining spots, ensuring you have access to a wide variety of cuisines and flavors.</p>
         <p className='mt-2 text-lg'>User-Friendly Platform: Our intuitive app and website make ordering your favorite meals a breeze. With real-time tracking and seamless payment options, your dining experience is streamlined from start to finish.</p>
         <p className='mt-2 text-lg'>
         Exceptional Service:  We pride ourselves on providing top-notch customer service. Our dedicated support team is here to assist you with any questions or concerns, ensuring a smooth and satisfying experience every time you order.
         </p>
         <p className='mt-2 text-lg'>Commitment to Quality:  We prioritize food safety and freshness, working closely with our restaurant partners to ensure that every meal arrives hot, delicious, and ready to enjoy.</p>

         <h2 className='text-2xl font-bold mt-5'>Our Team</h2>
         <p  className='mt-2 text-lg'>Behind the scenes, our team works tirelessly to enhance your food delivery experience. From our tech wizards who keep our platform running smoothly to our delivery professionals who bring your meals with a smile, every member of our team is committed to excellence.</p>

         <h2 className='text-2xl font-bold mt-5'>Join Us</h2>
         <p  className='mt-2 text-lg'>Thank you for choosing <span className='text-red-950 italic'>Zaika</span>. We’re excited to be part of your food journey and look forward to delivering your next meal with a touch of care and a lot of flavor.</p>

         <h1 className='text-2xl italic text-center text-red-950 font-bold mt-10 mb-5'>Hungry? Let’s get started!</h1>
         <h1> <span className='text-red-950 italic font-bold text-2xl mt-5'>Zaika</span> </h1>
        <p className='mt-2 text-lg'>Delivering more than just food—delivering experiences.</p> 
         
      </div>
    </div>
  )
}

export default About
