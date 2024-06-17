import React from 'react'
import MyHead3 from "./MyHead3"
import { Link } from 'react-router-dom'
import NutriConHead from "../nutri/NutriConHead"
import NutriConHead2 from "../nutri/NutriConHead2"

export default function MyNutri() {
  return (
    <div>
       <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        🍱 나의 식단 기록 🍱
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
        <table className="w-11/12 border m-3 rounded-2xl">
          <MyHead3 />
        </table>
      </div>
      <hr></hr>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
      <div className="text-xl text-center font-bold p-2 m-5 text-slate-900">
          📊 합산 결과 📊
        </div>
        <div className="w-full flex flex-col justify-center items-center px-2 mx-3 mb-20">
          <div className="w-4/5 text-xs text-end">
            * 각 영양소 클릭 시 식사지도 페이지로 이동합니다.
            <br /> * 권장섭취량이 충족된 영양소는 분홍색으로 표시됩니다.
          </div>
          <table className="w-4/5 border m-3">
            <NutriConHead />
          </table>
          <table className="w-4/5 border m-3">
            <NutriConHead2 />
          </table>
          </div>
        <Link
          to="/MyPage"
          className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
        >
          마이페이지
        </Link>
      </div>
    </div>
  )
}
