import React from 'react'
import { CDN_URL } from '../utils/constants';

const SliderCards = (props) => {
  const {cardData}= props;
  const {description,imageId}=cardData;
  return (
    <div>
      <img src={CDN_URL + imageId}  alt=""  className='w-[400px] h-[200px] m-2'/>
      <h3 className='w-[200px]'></h3>
    </div>
  )
}

export default SliderCards
