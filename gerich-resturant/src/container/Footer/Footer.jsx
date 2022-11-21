import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='section__padding  w-full relative z-20 flex justify-start items-center flex-col bg-[#0C0C0C] pt-0 sm:px-0 sm:pt-0 sm:pb-8'>
    <FooterOverlay />
    <Newsletter />

    <div className='w-full flex justify-between items-start mt-20 py-0 px-8 lg:items-center lg:flex-col lg:p-0 lg:my-8 lg:mx-0 lg:w-full'>
      <div className='flex-1 m-4 text-center'>
        <h1 className='text-[#FFFFFF] font-normal tracking-wider capitalize text-4xl mb-4 5xlmin:text-5xl'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd st, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1234</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='flex-1 m-4 text-center flex flex-col items-center justify-center lg:my-8 lg:mx-0 lg:w-full'>
        <img className='w-[210px] mb-3 s:w-[80%]' src={images.gericht} alt="footer logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon_img mt-4' />
        <div className='mt-2 flex'>
          <FiFacebook color='#FFFFFF' className='cursor-pointer text-3xl m-3 hover:text-[#DCCA87]' />
          <FiTwitter color='#FFFFFF'className='cursor-pointer text-3xl m-3 hover:text-[#DCCA87]' />
          <FiInstagram color='#FFFFFF'className='cursor-pointer text-3xl m-3 hover:text-[#DCCA87]' />
        </div>
      </div>

      <div className='flex-1 m-4 text-center lg:my-8 lg:mx-0 lg:w-full '>
        <h1 className='text-[#FFFFFF] font-normal tracking-wider capitalize text-4xl mb-4 5xlmin:text-5xl'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans mb-4'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div>
      <p className='p__opensans mt-12'>2022 Gericht.All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
