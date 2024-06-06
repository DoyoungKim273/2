import React from "react";

export default function MyPage() {
  return (
    <div className="min-h-screen">
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900 bg-purple-100">
        마이페이지
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        🍱 나의 식단 기록 🍱
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
