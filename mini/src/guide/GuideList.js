import React from "react";
import { Link } from "react-router-dom";
 
export default function GuideList() {
  return (
    <div className="min-h-screen">
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900 bg-purple-100">
        식사지도 가이드 목록
      </div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 💪🏻
      </div>
      <div className="text-center font-bold">
        <Link to="#">탄수화물</Link>
        <Link to="#">지방</Link>
        <Link to="#">단백질</Link>
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 비타민 🍎
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🧀 무기질 🧀
      </div>
    </div>
  );
}
