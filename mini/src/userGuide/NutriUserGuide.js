import React from "react";
import nutri1 from "./img/nutri1.JPG";
import nutri2 from "./img/nutri2.JPG";
import nutri3 from "./img/nutri3.JPG";
import nutri4 from "./img/nutri4.JPG";

export default function NutriUserGuide() {
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img src={nutri1} alt="nutri1" className="justify-center w-9/12 mt-10"></img>
        <img src={nutri2} alt="nutri2" className="justify-center w-9/12"></img>
        <img src={nutri4} alt="nutri2" className="justify-center mt-5 w-9/12"></img>
        <img src={nutri3} alt="nutri3" className="justify-center w-9/12 mb-20"></img>
      </div>
    </div>
  );
}