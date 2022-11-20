import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='w-full my-4 mx-0 flex flex-col'>
    <div className='flex justify-between items-center'>
      <div className='flex-1'>
        <p className='p__cormorant text-[#DCCA87]'>{title}</p>
      </div>

      <div className='w-24 h-[1px] bg-[#DCCA87] my-0 mx-4' />

      <div className='flex justify-end items-end'>
        <p className='p__cormorant '>{price}</p>
      </div>
    </div>

    <div className='w-full mt-1'>
         <p className='p__opensans text-[#AAA] text-4xl'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
