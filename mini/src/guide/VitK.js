import React from "react";
import vitK from "../img/guide/vitK.png";
import vitK1 from "./pic/vitK1.png"
import vitK2 from "./pic/vitK2.png"
import vitK3 from "./pic/vitK3.png"

export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 K 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitK} alt="vitK" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitK1} alt="vitK1" className="w-32 h-32 mx-5"></img>
          <img src={vitK2} alt="vitK2" className="w-32 h-32 mx-5"></img>
          <img src={vitK3} alt="vitK3" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 K란?</div>
            <div>
              - 비타민 K는 혈액응고에 필수적인 비타민으로 간에서 혈액응고인자의 합성에 관여한다.
.              <br />
              - 비타민 K의 주요 급원식품은 간, 녹색채소, 브로콜리, 콩류 등이다.
              <br />
              - 비타민 K는 섭취한 뒤 대부분 하루가 지나면 체내에서 없어진다. 
              <br />
              - 그러나 식사중 비타민 K의 양이 많을 뿐 아니라 장내 세균에 의해서도 합성되므로 결핍증은 흔하지 않다.
              <br />
              - 또한 비타민 K는 조리에 의해서도 별로 파괴되지 않는다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 K
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
