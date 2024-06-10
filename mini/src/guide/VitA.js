import React from "react";
import vitA from "../img/guide/vitA.png";
import vitA1 from "./pic/vitA1.png"
import vitA2 from "./pic/vitA2.png"
import vitE2 from "./pic/vitE2.png"

export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 지용성 비타민 - 비타민 A 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitA} alt="vitA" className="p-10"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitA1} alt="vitA1" className="w-32 h-32 mx-5"></img>
          <img src={vitA2} alt="vitA2" className="w-32 h-32 mx-5"></img>
          <img src={vitE2} alt="vitE2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 A란?</div>
            <div>
              - 비타민 A는 레티놀과 그 에스테르 형태인 레티닐 에스테르, 비타민 A 활성을 갖는 몇몇 카로티노이드들을 총칭한다.
              <br />
              - 레티놀, 레티닐에스테르는 주로 동물성 식품에, 카로티노이드들은 주로 식물성 식품에 존재한다.
              <br />
              - 비타민 A는 동물의 간, 어류, 달걀, 유제품, 녹황색 채소 등에 풍부하다.
              <br />
              - 비타민 A가 결핍될 경우 야맹증, 안구 건조증, 모낭 각화 증 등이 발생할 수 있다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 A</div>
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
