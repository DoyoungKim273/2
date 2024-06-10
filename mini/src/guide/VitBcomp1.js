import React from "react";
import vitBcomp1 from "../img/guide/vitBcomp1.png";
import vitB1 from "./pic/vitB1.png"
import vitB2 from "./pic/vitB2.png"
import vitD2 from "./pic/vitD2.png"

export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 B군①(B1, 2, 6, 12) 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitBcomp1} alt="vitBcomp1" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitB1} alt="vitB1" className="w-32 h-32 mx-5"></img>
          <img src={vitB2} alt="vitB2" className="w-32 h-32 mx-5"></img>
          <img src={vitD2} alt="vitD2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 B군①(B1, 2, 6, 12)이란?</div>
            <div>
              - 비타민 B군은 생체 내에서 조효소로서 세포 내 대사가 정상적으로 진행되도록 돕는다.
              <br />
              - 식품에 함유되어 있는 비타민 B복합체의 평균 장내 흡수율은 50 ~ 90% 이다.
              <br />
              - 비타민 B1(티아민) 은 여러 동식물성 식품에 널리 함유되어 있으며 돼지고기, 참치, 두류에 풍부하다.
              <br />
              - 비타민 B2(리보플라빈) 은 우유, 요구르트, 치즈에 풍부하다.
              <br />
              - 비타민 B6는 동물의 근육조직에 저장되어 있으므로 육류, 생선류, 가금류가 가장 좋은 급원이다.
              <br />
              - 비타민 B12는 육류, 가금류, 어패류에 풍부하게 함유되어 있다.
              <br />
              - 비타민 B군이 결핍될 경우 신체 대사에 지장이 생기며 피부염 등이 발생한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 B군①(B1, 2, 6, 12)</div>
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
