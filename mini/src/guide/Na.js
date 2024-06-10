import React from "react";
import na from "../img/guide/na.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 나트륨(Na) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={na} alt="na" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 나트륨(Na)이란?</div>
            <div>
              - 나트륨은 세포외액의 주된 양이온이며, 체내에 풍부한 무기질이다.
              <br />
              - 나트륨은 체내에서 삼투압의 정상 유지, 산과 염기의 평형 유지, 신경 자극의 전달 등에 기여한다.
              <br />
              - 인체 내 나트륨은 땀으로 인한 손실량이 매우 많다 해도 고갈되는 것은 흔치 않다.
              <br />
              - 나트륨의 주요 급원은 소금을 함유한 식품으로, 육류에는 채소, 과일, 콩류에 비해 비교적 많은 나트륨이 함유되어 있다.
              <br />
              - 식품을 가공할 때 소금을 첨가하므로 간장, 김치, 젓갈, 감자칩 등과 같은 가공식품은 나트륨 함량이 높다.
              <br />
              - 나트륨은 대부분의 식품에 약간씩 함유되어 있으므로 결핍증은 드무나, 과잉으로 장기간 섭취할 경우 고혈압과 부종이 나타난다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 나트륨(Na)</div>
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
