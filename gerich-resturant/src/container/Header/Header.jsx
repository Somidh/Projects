import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='bg-black  app__wrapper section__padding'>
    <div className='app__wrapper__info'>
      <SubHeading title="chase the new flowers" />
      <h1 className='text-[#DCCA87] tracking-wider uppercase leading-[117px] text-[90px] font-semibold'>The key to find dining</h1>
      <p className='my-8 mx-0 p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rerum non quos dolores consectetur unde. Lorem ipsum dolor sit amet.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div>
      <img className='app__wrapper_img w-[45em]' src={images.welcome} alt="" />

    </div>
  </div>
);

export default Header;
