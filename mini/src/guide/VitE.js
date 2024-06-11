import React from "react";
import vitE from "../img/guide/vitE.png";
import vitE1 from "./pic/vitE1.png";
import vitE2 from "./pic/vitE2.png";
import prot1 from "./pic/prot1.png";

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
              - 비타민 E는 지방산이나 중성 지방과 함께 흡수되며 항산화제로서의
              기능을 한다. . <br />
              - 비타민 E는 식물성 기름, 밀의 배아, 땅콩, 아스파라거스,
              마가린등에 많이 존재한다.
              <br />
              - 식품 내의 함량은 불포화지방산과 밀접한 관계가 있는데, 특히
              리놀레산의 농도와 비타민 E의 농도는 관련이 있다.
              <br />- 생화학적으로 비타민 E는 계속 순환되어 결과적으로 소모되지
              않기에 전형적인 비타민 E의 결핍증은 성인의 경우 거의 유발되지
              않는다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 E</div>
            <div>
              - 임신기의 비타민 E의 충분섭취량은 비임신 여성과 동일하게 설정되어
              있다.
              <br />- 그 근거로 임신 기간 동안에 혈중 지질 농도 증가로
              α-토코페롤의 농도가 상승하지만 태반을 통한 비타민 E의 이동은 큰
              변화가 없는 것으로 보고되었다.
              <br />- 또한 미숙아의 경우 비타민 E 결핍으로 인한 용혈성 빈혈이
              발생 할 수 있다고 보고되었으나, 임신 중 비타민 E 섭취 증가와
              미숙아의 관련성은 보고된 바 없다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 E</div>
            <div>
              - 수유기에는 유즙으로 분비되는 비타민 E 양이 약 300-540 μg/100
              mL이며, 영아의 하루 모유 섭취량을 약 0.78 L 이다.
              <br />- 이에 따라 모유로 분비되는 비타민 E의 양은 2.3-4.0 mg/일로
              평균 약 3.0 mg α-TE/일이 된다.
              <br />- 수유부의 1일 비타민 E 충분섭취량은 비수유 여성의
              충분섭취량에 3.0 mg α-TE을 가산한다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
