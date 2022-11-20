import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='flex__center section__padding flex-col bg-[#0C0C0C]' id='menu'>
    <div className='mb-8 text-center'>
      <SubHeading
        title="Menu that fits you palatte"
      />
      <h1 className='headtext__cormorant'>Today Special</h1>
    </div>

    <div className='w-full my-8 mx-0 flex justify-center items-start lg:flex-col lg:items-center lg:w-full '>
      <div className='flex__center flex-1 w-full flex-col'>
        <p className='font-semibold text-5xl leading-[58.5px] tracking-wider text-white sm:text-[35px]leading-[48.5px]'>Wine & Beer</p>
        <div className='flex flex-col my-8 mx-0 w-full'>
          {
            data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
        </div>
      </div>

      <div className='w-[410px] my-0 mx-8 sm:w-full lg:mb-20 lg:mx-0 5xlmin:w-[650px]'>
        <img className='w-full h-auto 5xlmin:h-[920px]' src={images.menu} alt="Menu img" />
      </div>

      <div className='flex__center flex-1 w-full flex-col'>
        <p className='font-semibold text-5xl leading-[58.5px] tracking-wider text-white sm:text-[35px]leading-[48.5px]'>cocktails</p>
        <div className=''>
          {
            data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
        </div>
      </div>

    </div>

    <div className='mt-4'>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
