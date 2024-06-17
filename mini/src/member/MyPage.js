import React from "react";
import MyHead from "./MyHead";
import MyHead2 from "./MyHead2";
import { Link } from "react-router-dom";

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
          <MyHead />
        </table>
        <Link to="/MyNutri"
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
            
          >
            임시 버튼
          </Link>
      </div>
      <hr></hr>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        📄 나의 메모 📄
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
        <table className="w-11/12 border m-3 rounded-2xl">
          <MyHead2 />
        </table>
        <Link to="/MyMemo"
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
            
          >
            작성
          </Link>
          <Link to="/MyMemoRe"
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
            
          >
            임시 버튼
          </Link>
      </div>
      <hr></hr>
    </div>
  );
}
