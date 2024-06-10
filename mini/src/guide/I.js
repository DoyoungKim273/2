import React from "react";
import i from "../img/guide/i.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 요오드(I) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={i} alt="i" className="p-5"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 요오드(I)란?</div>
            <div>
              - 요오드는 체내에 15 ~ 20mg 정도 있으며 이 중 70 ~ 80%는 갑상선에 존재하고 나머지는 근육, 피부, 골격, 다른 내분비 조직 등에 분포한다.
              <br />
              - 요오드는 체내 대사율을 조절하고 성장 발달을 촉진하느 갑상선 호르몬의 구성성분이다.
              <br />
              - 갑상선 호르몬은 산소의 이용이나 포도당을 이용하는 효소계의 반응 속도를 높여 기초 대사율을 조절하고 체온 조절에도 관여한다.
              <br />
              - 식이를 통한 아연의 섭취가 부족하더라도 아연의 흡수나 배설을 통해 항상성이 유지되도록 체내에서 어느정도 조절이 가능하다.
              <br />
              - 식이를 통한 요오드의 섭취가 부족하면 혈액에서 요오드를 보다 더 얻으려고 함에 따라 갑상선이 비대해지며 요오드 결핍 증세가 나타나게 된다.
              <br />
              - 요오드는 미역, 김, 다시마, 파래 등ㅇ의 해조류난 해산물에 풍부하다.
            </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 요오드(I)</div>
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
