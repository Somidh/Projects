import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant mb-12'>Find Us</h1>

      <div className=''>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, est!</p>
        <p className='p__cormorant text-[#DCCA87] my-8 mx-0'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00am - 03:00 am</p>
      </div>
      <button className='custom__button mt-8 '>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
