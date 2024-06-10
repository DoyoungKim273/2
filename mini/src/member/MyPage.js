import React from "react";
import NutriHead from "../nutri/NutriHead";

export default function MyPage() { 
  return (
    <div className="min-h-screen">
      <div className="justify-start text-2xl text-center font-bold p-5 my-7 text-purple-950 bg-purple-100">
        마이페이지
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        🍱 나의 식단 기록 🍱
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
          </table>
        </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        ⏲ 나의 체중 기록 ⏲
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📄 나의 메모 📄
      </div>
    </div>
  );
}
