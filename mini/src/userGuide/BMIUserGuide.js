import React from 'react'
import BMI from './img/BMI.JPG'

export default function BMIUserGuide() {
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img src={BMI} alt="BMI" className="justify-center w-3/5 mt-10"></img>
      </div>
    </div>
  )
}
