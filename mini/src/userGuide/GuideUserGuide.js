import React from 'react'
import guide from './img/guide.JPG'

export default function GuideUserGuide() {
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <img src={guide} alt="guide" className="justify-center w-3/5 mt-10"></img>
      </div>
    </div>
  )
}
