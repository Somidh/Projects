import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading 
      title="Chef's Word"
      />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='flex flex-col w-full mt-20'>
        <div className='flex justify-start items-end'>
          <img className='w-[47px] h-10 mt-0 mr-4 mb-4 ml-0' src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum.</p>
        </div>
        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum earum debitis illum quaerat? Aperiam odio nisi libero, ad minima vero maiores quam ratione quaerat dolore fugit asperiores aliquid recusandae?</p>
      </div>

      <div className='w-full mt-12'>
        <p className='font-normal text-4xl tracking-wider capitalize text-[#DCCA87]'>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img className='w-64 mt-12 sm:w-[80%]' src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
