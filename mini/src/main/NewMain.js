import React, { useState } from 'react'
import mainImg from '../img/mainImg.jpg'
import Linkmain from '../main/Linkmain'

export default function NewMain() {

    const [imgLoaded, setImgLoaded] = useState(false);

    const handleImgLoad = () => {
        setImgLoaded(true);
    }
  return (
    <div >
      <div className='items-center justify-center flex'>
      <img 
      src={mainImg} 
      alt="mainImg" 
      className={`h-2/5 m-1 transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-30'}`}
      onLoad={handleImgLoad}></img>
      </div>
      {imgLoaded && <Linkmain/>}
    </div>
  )
}
