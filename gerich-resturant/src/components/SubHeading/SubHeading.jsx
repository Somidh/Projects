import React from 'react';

import { images } from '../../constants'

const SubHeading = ({title}) => (
  <div className='mb-4'>
    <p className='p__cormorant'>{title}</p>
    <img className='spoon__img w-[80%]' src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
