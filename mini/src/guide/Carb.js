import React from "react";
import carb from "../img/guide/carb.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        💪🏻 에너지 영양소 - 탄수화물 💪🏻
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={carb} alt="carb" className="p-10"></img>
        <ul className="m-7">
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 탄수화물이란?</div>
            <div>
              - 탄수화물은 탄소 : 수소 : 산소가 1 : 2 : 1의 비율로 조성된 물질로서 지방, 단백질과 함께 3대 영양소를 구성한다.
              <br />
              - 탄수화물은 자연계에 가장 많이 있는 유기물질이다. 
              <br />
              -   식물은 포도당을 광합성 하여 뿌리, 열매 등에 녹말과 섬유소 형태로 저장하며,
              동물은 식품으로부터 얻은 탄수화물을 당과 글리코겐 형태로 저장하고 있다.
              <br />
              - 탄수화물은 에너지 공급원으로 매우 중요하며(1g당 4kcal) 소화도 쉽고 체내에서 독성 물질을 만드는 일도 드물다.
              <br />
              - 단순 탄수화물은 주로 당류라고 하며, 단당류와 이당류가 있다.
              <br />
              - 복합 탄수화물은 단순당이 여러 개 모인 다당류이며, 녹말 / 글리코겐 / 식이섬유가 있다.
              <br />
              - 곡류 위주의 우리나라 식사는 비교적 탄수화물의 섭취가 용이하다. 하루 밥 세끼를 통해 200g 정도의 탄수화물 섭취가 가능하다
              <br />
              - 그 외 식이섬유는 곡류, 감자류, 채소, 과일, 해조류에 풍부하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신, 수유기의 탄수화물</div>
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
