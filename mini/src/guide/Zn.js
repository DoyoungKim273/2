import React from "react";
import zn from "../img/guide/zn.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 아연(Zn) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={zn} alt="zn" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 아연(Zn)이란?</div>
            <div>
              - 아연은 체내에 1.5g ~ 2.5g 정도로 소량 존재하지만 생체 내 여러 효소의 구성성분이 되는 필수 미량 원소이다.
              <br />
              - 아연은 체내에서 생체 내 여러 금속 효소의 구성 요소가 되고 생체막의 구조와 기능에 관여하며 면역 기능을 유지한다.
              <br />
              - 아연의 주된 급원은 동물성 식품으로 쇠고기를 비롯한 육류, 간, 굴, 게, 새우 등의 패류가 좋은 공급원이다.
              <br />
              - 식이를 통한 아연의 섭취가 부족하더라도 아연의 흡수나 배설을 통해 항상성이 유지되도록 체내에서 어느정도 조절이 가능하다.
              <br />
              - 하지만 가임기 여성의 경우 아연 영양이 저조해지기 쉽기에 유의해야한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 아연(Zn)</div>
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
