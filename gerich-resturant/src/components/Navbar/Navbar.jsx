import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'


import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='w-full flex justify-between items-center bg-black py-4 px-8 sm:p-6'>
      <div className='flex justify-start items-center'>
        <img className='w-40 sm:w-28' src={images.gericht} alt="app logo" />
      </div>

      <ul className='full-screen_nav flex-1 text-white list-none flex justify-center items-center lg:hidden'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='flex justify-end items-center sm:hidden'>
        <a href="#login" className='my-0 mx-4 duration-500 ease-linear hover:border-b-[1px] border-solid border-[#DCCA87]'>Log In / Register</a>
        <div className='w-[1px] h-7 bg-[#AAAAAA]' />
        <a className='my-0 mx-4 duration-500 ease-linear hover:border-b-[1px] border-solid border-[#DCCA87] ' href="/">Book Table</a>
      </div>
      <div className='hidden lg:flex'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black slide-bottom duration-500 ease-in flex-col flex__center z-10 '>
            <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggleMenu(false)} className='text-[#DCCA87] cursor-pointer absolute top-5 right-5 ' />
            <ul className='small-screen_nav flex flex-col text-center items-center justify-center  gap-5'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='flex flex-col mt-10 gap-2 justify-end items-center hover: text-[#DCCA87]'>
              <a href="#login" className='my-0 mx-4 duration-500 ease-linear hover:border-b-[1px] border-solid border-[#DCCA87] '>Log In / Register</a>
              <a className='my-0 mx-4 duration-500 ease-linear hover:border-b-[1px] border-solid border-[#DCCA87] ' href="/">Book Table</a>
            </div>
          </div>
        )}
      </div>
    </nav >
  )
}


export default Navbar;
