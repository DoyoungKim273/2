import React from "react";

export default function Noticemain() {
  return (
    <div>
      <section>
        <div className="bg-purple-400 h-14">
            <div className="px-7 py-3 text-white font-bold text-lg">바로가기</div>
        </div>
        <ul>
          <li className="m-5 p-5 bg-purple-200 rounded-2xl">
            <a href="#" className="font-bold text-lg">식사지도 - 에너지 영양소</a>
            <div>
              칼슘(calcium)은 원자번호 20, 원소기호 Ca, 알칼리 토류 금속의
              하나이다. 인체의 칼슘 보유량은 체중의 약 1-2% 정도로써 체내 칼슘의
              대부분(99%)은 치아와 뼈에 존재하고, 그 외에는 혈액을 포함한
              세포외액 및 근육 등 여러 조직에 존재한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-200 rounded-2xl">
            <a href="#"  className="font-bold text-lg">식사지도 - 비타민과 무기질</a>
            <div>
              칼슘(calcium)은 원자번호 20, 원소기호 Ca, 알칼리 토류 금속의
              하나이다. 인체의 칼슘 보유량은 체중의 약 1-2% 정도로써 체내 칼슘의
              대부분(99%)은 치아와 뼈에 존재하고, 그 외에는 혈액을 포함한
              세포외액 및 근육 등 여러 조직에 존재한다.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
