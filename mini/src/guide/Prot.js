import React from "react";
import prot from "../img/guide/prot.png";
import prot1 from "./pic/prot1.png"
import prot2 from "./pic/prot2.png"
import vitD2 from "./pic/vitD2.png"

export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 단백질 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={prot} alt="prot" className="p-10"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={prot1} alt="prot1" className="w-32 h-32 mx-5"></img>
          <img src={prot2} alt="prot2" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 단백질이란?</div>
            <div>
              - 단백질은 생명 유지에 필수적인 영양소로서 효소, 호르몬, 항체 등의 주요 생체 기능을 수행하고 근육 등의 체조직을 구성한다.
              <br />
              - 단백질은 살아 있는 세포에서 수분 다음으로 풍부하게 존재한다. 
              <br />
              - 때문에 식이를 통해 체내에서 필요한 단백질을 규칙적으로 공급해 주는 일은 건강 유지에 필수적이다.
              <br />
              - 단백질은 주요 영양소로서 식물성 식품과 동물성 식품에 골고루 들어있다.
              <br />
              - 곡류, 옥수수, 밀은 콩류나 견과류, 유제품, 어육류 및 난류에 비해 단백질 질이 낮고 그 함량도 적지만 주식으로써 단백질 섭취량의 상당부분을 차지한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 단백질</div>
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
