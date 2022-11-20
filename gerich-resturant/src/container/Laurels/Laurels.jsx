import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Laurels.css';

const AwardCard =  ({award: {imgUrl, title, subtitle}}) => (
  <div className='flex-1 flex justify-start items-start min-w-[230px] m-4 5xlmin:min-w-[390px] s:min-w-full s:my-4 s:mx-0'>
    <img className='w-12 h-12' src={imgUrl} alt="award" />
    <div className='flex flex-col ml-4'>
      <p className='p__cormorant text-[#DCCA87]'>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id= 'awards'>
    <div className='app__wrapper_info'>
      <SubHeading 
      title="Awards & recognition"
       />
       <h1 className='headtext__cormorant'>Our Laurels</h1>

       <div className='flex justify-start items-center mt-12 flex-wrap'>
        {data.awards.map(award => <AwardCard award={award} key={award.title} />)}
       </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
