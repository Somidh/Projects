import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';


const AboutUs = () => (
  <div className='app__bg flex__center section__padding relative' id='about'>
    <div className='flex__center absolute inset-0'>
      <img className='w-96 h-[415px] z-0 ' src={images.G} alt="G letter" />
    </div>

    <div className='flex__center w-full z-[2] 2md:flex-col'>
      <div className='flex-1 flex justify-end items-end flex-col text-right'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="About_spoon" />
        <p className='p__opensans my-8 mx-0 text-[#AAAAAA]' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repellat, obcaecati similique illum hic qui! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, delectus.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='flex__center mx-16 my-8 2md:my-16 2md:mx-0'>
        <img className='h-[910px]  sm:h-[420px]' src={images.knife} alt="about_knife" />
      </div>

      <div className='flex-1 flex justify-start items-start flex-col text-left'>
        <h1 className='headtext__cormorant'>About History</h1>
        <img src={images.spoon} alt="About_spoon" />
        <p className='p__opensans my-8 mx-0 text-[#AAAAAA]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repellat, obcaecati similique illum hic qui! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
