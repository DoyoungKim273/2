import React from "react";
import k from "../img/guide/k.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 칼륨(K) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={k} alt="k" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 칼륨(K)이란?</div>
            <div>
              - 칼륨은 칼슘, 인 다음으로 체내에 많이 존재하는 무기질로, 체내 함량은 나트륨의 2배 정도이다.
              <br />
              - 칼륨은 체내에서 수분과 전해질의 평형 유지, 산염기의 평형 유지의 기능을 한다.
              <br />
              - 더불어 근육의 이완과 수축과 이완 작용에 관여하며 당질 대사와 단백질 합성에도 관여한다.
              <br />
              - 칼륨은 모든 동식물성 식품에 널리 분포되어 있으므로, 정상적인 식사를 할 경우 충분히 섭취된다.
              <br />
              - 칼륨은 결핍되는 경우가 드무나 지속적인 구토나 설사 시 결핍증이 발생할 수 있다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 칼륨(K)</div>
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
