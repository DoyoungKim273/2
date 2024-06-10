import React from "react";
import fe from "../img/guide/fe.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 철(Fe) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={fe} alt="fe" className="p-5"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 철(Fe)이란?</div>
            <div>
              - 철은 체내에서 산소를 조직으로 이동 및 저장하는데 관여하고 여러 효소의 보조인자로 작용하는 성분이다.
              <br />
              - 철의 급원으로 가장 좋은 식품은 대부분 햄철을 함유하고 있는 육류, 어패류, 가금류이다.
              <br />
              - 그 다음으로 좋은 급원은 곡류나 곡류로 만든 가공식품, 콩류 및 진한 녹색 채소 등이다.
              <br />
              - 철이 결핍될 경우 적혈구의 수가 줄어들어 빈혈 증세가 나타난다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 철(Fe)</div>
            <div>
              - 사용자의 신장, 체중 입력에 따라 BMI(체질량지수)를 계산합니다.
              <br />
              - 계산된 BMI(체질량지수)를 바탕으로 사용자의 임신기의 적정 체중
              증가량, 수유기의 적정 체중 감소량 정보를 제시합니다.
              <br />- 수치 도출의 근거는 대한산부인과학회의 자료를 바탕으로
              합니다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
