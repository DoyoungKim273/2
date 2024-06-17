import React from 'react'
import guide from './img/guide.JPG'
import guide2 from './img/guide2.JPG'

export default function GuideUserGuide() {
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img src={guide2} alt="guide2" className="justify-center w-9/12 mt-10"></img>
        <img src={guide} alt="guide" className="justify-center w-9/12 mb-20"></img>
      </div>
    </div>
  )
}
