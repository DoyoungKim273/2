import React from 'react'

export default function NutriHead() {
  return (
    <thead>
        <tr className= 'h-10 text-center bg-purple-800 text-white'>
            <th className='w-1/3'>대분류</th>
            <th className='w-1/3'>대표 식품명</th>
            <th className='w-1/3'>식품명</th>
        </tr>
    </thead>
  )
}
