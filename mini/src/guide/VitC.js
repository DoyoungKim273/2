import React from "react";
import vitC from "../img/guide/vitC.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 C 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitC} alt="vitC" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 C란?</div>
            <div>
              - 비타민 C는 모든 생물 조직내에 함유되어 있으며 대부분의 포유동물의 체내에서 포도당으로부터 합성된다.
              <br />
              - 그러나 사람, 원숭이, 생선류와 같이 특정 산화 효소가 없는 동물은 비타민 C를 자체 생성하지 못하므로 식품을 통해 공급받아야 한다.
              <br />
              - 비타민 C의 체내 기능으로는 콜라겐 합성, 항산화 활성, 철 흡수, 면역력 강화, 세포 구성물질 합성 등이 있다.
              <br />
              - 비타민 C는 쉽게 산화되므로 준비, 조리 및 가공 과정, 계절적 변화에 민감하다.
              <br />
              - 비타민 C의 주된 급원 식품은 신선한 감귤류와 녹색 채소로서 오렌지, 자몽, 굴, 레몬 등이다.
              <br />
              - 채소나 과일에 있는 천연방붑제인 이소아스코르브산은 비타민 C 활성은 없지만 신체 내에서 항산화제로서 작용한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 C</div>
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
