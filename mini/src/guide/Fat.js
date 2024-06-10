import React from "react";
import fat from "../img/guide/fat.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 지방(지질) 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={fat} alt="fat" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 지방(지질)이란?</div>
            <div>
              - 지질은 탄소, 수소, 산소로 이루어진 유기 화합물로서, 상온에서 고체 형태인 지방과 액체 형태인 기름으로 존재한다.
              <br />
              - 식품과 체내에 있는 지질은 중성지질이 대부분이며, 소량의 인지질, 당지질, 스테로이드, 지용성 비타민, 왁스류와 기타 복합 지질화합물들이 포함된다.
              <br />
              - 지질의 과도한 섭취는 비만, 암, 심혈관계 질환 등과 관련이 있기 때문에 지질을 적절히 섭취하는 것이 필요하다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 지방(지질)</div>
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
