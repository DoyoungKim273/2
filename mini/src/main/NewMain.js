import React, { useEffect, useState } from "react";
import mainImg from "../img/mainImg.jpg";
import mainImg_2 from "../img/mainImg_2.jpg";
import Linkmain from "../main/Linkmain";

export default function NewMain() {
  const [currentImg, setCurrentImg] = useState(mainImg);
  const[opacity, setOpacity] = useState(1);
  // const [imgLoaded, setImgLoaded] = useState(false);
  // const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setAnimationDone(false);
      setOpacity(0.7);
      setTimeout(()=> {
        setCurrentImg((current) => (current === mainImg ? mainImg_2 : mainImg));
        setOpacity(1);
      }, 1500)
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // const handleImgLoad = () => {
  //   setImgLoaded(true);
  //   setTimeout(() => {
  //     setImgLoaded(false);
  //     setAnimationDone(true);
  //   }, 2000)
  // };

  return (
    <div>
      <div className="items-center justify-center flex">
        <img
          src={currentImg}
          alt="displayImg"
          // className={`h-2/5 m-1 transition-opacity duration-1000 ${
          //   imgLoaded ? "opacity-100" : "opacity-30"
          // }`}
          style={{transition: "opacity 1.5s ease-in-out", opacity : opacity}}
          className = "h-2/5 m-1"
        ></img>
        {/* <img src={mainImg_2} alt="mainImg_2"></img> */}
      </div>
      {/* {imgLoaded && <Linkmain />} */}
      <Linkmain />
    </div>
  );
}
