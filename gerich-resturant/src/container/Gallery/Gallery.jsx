import React,{ useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    direction === 'left' ? current.scrollLeft -= 300 : current.scrollLeft += 300
  }

  return (
    <div className='flex__center bg-[#0C0C0C] py-16 pl-24 pr-0 lg:flex-col 2md:py-16 2md:pr-0 2md:pl-16 sm:'>
      <div className='flex-1 flex justify-center items-start flex-col min-w-[500px] pr-8 5xlmin:min-w-[1000px] 5xlmin:pr-16'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans text-[#AAA] mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, accusamus! Lorem ipsum dolor sit amet.</p>
        <button type='button' className='custom__button mt-4'>View More</button>
      </div>

      <div className='flex-1 flex max-w-[50%] relative lg:max-w-full lg:my-20 lg:mx-0'>
        <div className='images_container flex w-max overflow-x-scroll' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='flex__center relative min-w-[301px] h-[447px] mr-8 5xlmin:min-w-[400px] 5xlmin:h-[550px]' key={`gallery_image-${index + 1}`}> 
            <img className='w-full h-full object-cover opacity-100  duration-300 ease-linear hover:opacity-40' src={image} alt="gallery" />
            <BsInstagram className='absolute cursor-pointer opacity-70 ' fontSize={32} color="#fff"  transition="0.5 ease"   />
          </div>
        ))}
        </div>
        <div className='w-full absolute flex justify-between items-center py-0 px-4 bottom-[5%]'>
          <BsArrowLeftShort className='cursor-pointer bg-[#0C0C0C] rounded-md' color='#DCCA87' fontSize={32} onClick={() => scroll('left')} />
          <BsArrowRightShort className='cursor-pointer bg-[#0C0C0C] rounded-md' color='#DCCA87' fontSize={32} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}


export default Gallery;
