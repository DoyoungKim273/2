import React from "react";
import NutriHead from "./NutriHead";

export default function NutriCal() {
  return (
    <div>
      <div>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-5 bg-purple-400 text-white rounded-2xl">
          식단을 통한 영양 평가
        </h2>
        <div className="m-10 flex flex-row items-center justify-center">
          <select className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl">
            <option>--- 식품 대분류 선택 ---</option>
          </select>
          <select className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl">
            <option>--- 대표 식품명 선택 ---</option>
          </select>
          <input
            type="text"
            placeholder="식품 키워드 입력"
            className="m-8 p-3 bg-slate-300 w-1/4 rounded-2xl"
          ></input>
          <button className=" m-8 bg-purple-700 text-white p-3 rounded-2xl w-1/4 font-bold">
            제출
          </button>
          <button className=" m-8 bg-purple-700 text-white p-3 rounded-2xl w-1/4 font-bold">
            취소
          </button>
        </div>
        <div className="text-center text-xl font-bold p-2 m-3 bg-purple-400 text-white rounded-2xl">
          출력된 값 리스트
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
          </table>
          <div className="w-48 items-center justify-center text-center font-bold p-2 m-3 bg-slate-600 text-white rounded-2xl">
            상세보기 바로가기
          </div>
        </div>
      </div>
    </div>
  );
}
