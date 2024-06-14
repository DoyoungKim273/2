import React, { useEffect, useState } from "react";
import mainImg from "../img/mainImg.jpg";
import mainImg_2 from "../img/mainImg_2.jpg";
import Linkmain from "../main/Linkmain";

export default function NewMain() {
  const [currentImg, setCurrentImg] = useState(mainImg);
  const[opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0.8);
      setTimeout(()=> {
        setCurrentImg((current) => (current === mainImg ? mainImg_2 : mainImg));
        setOpacity(1);
      }, 1500)
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="items-center justify-center flex">
        <img
          src={currentImg}
          alt="displayImg"
          style={{transition: "opacity 1.5s ease-in-out", opacity : opacity}}
          className = "h-2/5 m-1"
        ></img>
      </div>
      <Linkmain />
    </div>
  );
}
