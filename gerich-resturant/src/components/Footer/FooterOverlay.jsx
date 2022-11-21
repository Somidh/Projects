import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className='w-full h-full -z-10 flex flex-col absolute'>
    <div className='h-1/4 bg-[#0C0C0C]'/>
    <div className='app__bg h-3/4'/>
  </div>
);

export default FooterOverlay;
