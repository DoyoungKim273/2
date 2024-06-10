import React from "react";
import vitD from "../img/guide/vitD.png";
import vitD1 from "./pic/vitD1.png"
import vitD2 from "./pic/vitD2.png"
import prot1 from "./pic/prot1.png"

export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 D 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitD} alt="vitD" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitD1} alt="vitD1" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          <img src={prot1} alt="prot1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 D란?</div>
            <div>
              - 비타민 D는 비타민 D의 활성을 가진 화합물들의 총칭으로, 비타민 D2와 D3가 대표적이다
.              <br />
              - 비타민 D는 다른 비타민과 달리 자외선을 촉매로 체내에서 합성될 수 있다.
              <br />
              - 그러나 햇빛을 충분히 받지 못하는 경우에는 비타민 D가 많이 함유된 식품이나 보충제를 섭취하여야 한다.
              <br />
              - 비타민 D가 풍부한 식품에는 이스트, 기름기가 풍부한 생선 등이 있다.
              <br />
              - 비타민 A가 결핍될 경우 규루병, 골연화증 및 골다공증 등이 발생한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 D
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
