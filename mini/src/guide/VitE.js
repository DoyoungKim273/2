import React from "react";
import vitE from "../img/guide/vitE.png";
import vitE1 from "./pic/vitE1.png"
import vitE2 from "./pic/vitE2.png"
import prot1 from "./pic/prot1.png"



export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 E 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitE} alt="vitE" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitE1} alt="vitE1" className="w-32 h-32 mx-5"></img>
          <img src={vitE2} alt="vitE2" className="w-32 h-32 mx-5"></img>
          <img src={prot1} alt="prot1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 E란?</div>
            <div>
              - 비타민 E는 지방산이나 중성 지방과 함께 흡수되며 항산화제로서의 기능을 한다.
.              <br />
              - 비타민 E는 식물성 기름, 밀의 배아, 땅콩, 아스파라거스, 마가린등에 많이 존재한다.
              <br />
              - 식품 내의 함량은 불포화지방산과 밀접한 관계가 있는데, 특히 리놀레산의 농도와 비타민 E의 농도는 관련이 있다.
              <br />
              - 생화학적으로 비타민 E는 계속 순환되어 결과적으로 소모되지 않기에 전형적인 비타민 E의 결핍증은 성인의 경우 거의 유발되지 않는다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 E
            </div>
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
