import React from "react";
import mg from "../img/guide/mg.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 마그네슘(Mg) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={mg} alt="mg" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 마그네슘(Mg)이란?</div>
            <div>
              - 마그네슘은 식물색소의 엽록소의 구성원소이므로 식물성 식품은 마그네슘의 풍부한 급원이 된다.
              <br />
              - 마그네슘은 체내에서 골격과 치아의 구성선분이 되며 여러 효소의 보조인자나 활성제로 작용한다.
              <br />
              - 마그네슘은 엽록소의 구성성분이므로 식물성 식품에 풍부한데 특히 코코아, 견과류, 대두, 전곡에 많다.
              <br />
              - 마그네슘은 칼슘과 달리 자연계에 널리 분포되어 있고 골격에서 서서히 혈액으로 이동하므로 고갈 또한 서서히 진행된다.
              <br />
              - 혈청 마그네슘이 저하될 경우 신경자극전달과 근육의 수축 이완작용이 제대로 조절되지 않아 신경이나 근육에 떨림이 발생한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 마그네슘(Mg)</div>
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
