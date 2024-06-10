import React from "react";
import ca from "../img/guide/ca.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 칼슘(Ca) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={ca} alt="ca" className="p-5"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 칼슘(Ca)이란?</div>
            <div>
              - 칼슘은 인체 내 무기질 중 가장 많이 존재하는 물질로 치아와 골격을 유지하는 기능 외에도 여러 생리 기능을 조절하는데 중요한 역할을 한다.
              <br />
              - 오랜 기간 동안의 칼슘 섭취 정도는 골격의 건강에 영향을 미쳐 골다공증의 발병 여부에 중요한 결정 요인이 된다.
              <br />
              - 칼슘의 체내 기능으로는 골격의 구성, 혈액 응고, 신경 전달, 근육 수축 및 이완 등의 체내 대사 조절 기능이 있다.
              <br />
              - 우유, 치즈, 요구르트와 같은 유제품은 칼슘의 중요 급원이다.
              <br />
              - 식빵이나 크래커 같이 제조시에 우유가 들어가는 식품과 브로콜리 등의 녹색채소도 칼슘 섭취에 기여한다.
              <br />
              - 칼슘이 결핍되면 체내 골질량을 충분히 유지할 수 없기에 골감소증, 골다공증 등이 유발된다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 칼슘(Ca)</div>
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
