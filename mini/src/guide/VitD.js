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
            <div className="font-bold text-lg"> 💜 임신기의 비타민 D
            </div>
            <div>
              - 임신기 동안 비타민 D가 모체와 신생아의 칼슘 평형에 어떠한 영향을 미치는지 많은 연구가 진행되고 있다.
              <br />
              - 모체의 골밀도와 출산 후 골 건강을 위해 성인의 비타민 D 충분섭취량을 공급하는 것이 중요하다.
              <br />
              - 일반적으로 비타민 D를 식품으로 충분히 섭취하기 어려우므로 비타민 D 강화 우유나 생선류, 난류 등의 식품 섭취에 유의한다.
              <br />
              - 더불어 규칙적인 옥외 활동을 통해 햇빛을 충분히 받도록 한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 D
            </div>
            <div>
              - 수유부 역시 비타민 D 강화 우유나 생선류, 난류, 말린 버섯 등 비타민 D가 풍부한 식품 섭취어 유의해야한다.
              <br />
              - 더불어 규칙적인 옥외 활동을 통해 햇빛을 충분히 받도록 한다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
