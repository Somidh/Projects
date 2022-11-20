import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'


import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo(prev => !prev)

    playVideo ? vidRef.current.pause() : vidRef.current.play()
  }

  return (

    <div className='h-screen relative'>
      <video className='w-full h-full object-cover'
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className='flex__center absolute inset-0 bg-[rgba(0,0,0,0.65)]'>
        <div className='flex__center w-24 h-24 rounded-full border border-solid border-[#DCCA87] cursor-pointer' onClick={handleVideo}>
          {playVideo ?
            <BsPauseFill color="fff" fontSize={30} />
            : <BsFillPlayFill color="fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )

}


export default Intro;
