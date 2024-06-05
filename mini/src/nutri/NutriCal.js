import React from "react";
import NutriHead from "./NutriHead";
import NutriDetail from "./NutriDetail";
import { Link } from "react-router-dom";

export default function NutriCal() {
  return (
    <div>
      <div>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
          🍱 식단을 통한 영양 평가 🍱
        </h2>
        <hr></hr>
        <div className="m-10 flex flex-row items-center justify-center">
          <select className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl">
            <option>--- 식품 대분류 선택 ---</option>
          </select>
          <select className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl">
            <option>--- 대표 식품명 선택 ---</option>
          </select>
          <select className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl">
            <option>--- 식품 중분류 선택 ---</option>
          </select>
          <input
            type="text"
            placeholder="식품 키워드 입력"
            className="m-8 p-3 bg-slate-300 w-1/4 rounded-2xl"
          ></input>
          <button className=" m-8 bg-purple-400 text-white p-3 rounded-2xl w-36 font-bold">
            입력
          </button>
          <button className=" m-8 bg-purple-600 text-white p-3 rounded-2xl w-36 font-bold">
            취소
          </button>
        </div>
        <hr></hr>
        <div className="text-center text-xl font-bold p-2 m-3 text-slate-900">
          📄 선택한 음식 목록 📄
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
          </table>
          <Link
            to="/NutriDetail"
            className="w-48 items-center justify-center text-center font-bold p-2 m-3 bg-purple-400 text-white rounded-2xl"
          >
            상세보기 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
