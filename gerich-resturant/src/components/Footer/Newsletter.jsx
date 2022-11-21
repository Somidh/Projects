import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';


const Newsletter = () => (
  <div className='py-8 px-16 border-[1px] border-solid border-[#DCCA87] bg-[#0C0C0C] sm:py-8 sm:px-0 sm:border-none'>
    <div className='flex flex-col items-center justify-center'>
      <SubHeading title="Newletter" />
      <h1 className='headtext__cormorant s:text-[32px] leading-[50px]'>Subscirbe to Our Newsletter</h1>
      <p className='p__opensans'> And never miss latest Updates!</p>
    </div>

    <div className='flex__center mt-12 2md:flex-col w-full'>
      <input className='w-[620px] border-[1px] border-solid border-[#DCCA87] rounded-md text-base text-[#FFFFFF] mr-8 py-3 px-4 bg-[#0C0C0C] 2md:mx-0 2md:mt-0 2md:mb-8 2md:w-full 5xlmin:text-[2rem]' type="email" placeholder='Enter your e-mail address' />
      <button className='custom__button w-max'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
