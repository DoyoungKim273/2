import React from "react";
import vitBcomp2 from "../img/guide/vitBcomp2.png";
import vitB3 from "./pic/vitB3.png"
import vitB4 from "./pic/vitB4.png"
import vitA1 from "./pic/vitA1.png"


export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 B군②(비오틴, 엽산 등) 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitBcomp2} alt="vitBcomp2" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={vitB3} alt="vitB3" className="w-32 h-32 mx-5"></img>
          <img src={vitB4} alt="vitB4" className="w-32 h-32 mx-5"></img>
          <img src={vitA1} alt="vitA1" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 비타민 B군②(비오틴, 엽산 등)이란?</div>
            <div>
              - 비오틴은 황을 함유한 수용성 비타민으로서, 체내 대사 전반에서 중요한 역할을 한다.
              <br />
              - 비오틴이 풍부한 식품으로는 난황, 간, 땅콩, 대두, 이스트, 치즈 등이 있다.
              <br />
              - 비오틴이 결핍될 경우 피부 발진, 탈모증 등의 증세가 나타난다.
              <br />
              - 엽산은 DNA 합성과 세포분열에 필수적인 비타민으로 성장 뿐만 아니라 혈구 형성을 위해서도 필요하다.
              <br />
              - 엽산은 인체 및 포유동물, 박테리아 등의 성장인자로 작용하며 항빈혈작용을 하는 물질이다.
              <br />
              - 엽산은 시금치과 같은 짙푸른 잎채소에 특히 풍부하며 채소류, 두류, 간 등에도 많이 함유되어 있다.
              <br />
              - 엽산이 결핍될 경우 기형아 출산 확률이 높아지고 거대적아구성 빈혈이 나타난다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 비타민 B군②(비오틴, 엽산 등)</div>
            <div>
              - 엽산은 임신기간 동안 증가된 조혈 작용은 물론 태아의 성장과 태반 조직의 발달에 필수적인 영양소이다.
              <br />
              - 임신 중 엽산의 부족은 유산, 임신중독증, 저체중아, 조산아, 특히 신경장애아의 출생빈도를 높인다.
              <br />
            - 따라서 임신 초기부터 엽산을 적극적으로 섭취하여야 하며 엽산이 풍부한 푸른 잎 채소, 두류와 엽산 보충제를 복용한다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 비타민 B군②(비오틴, 엽산 등)</div>
            <div>
              - 수유부는 모유 생성을 위해 엽산 필요량이 증가한다.
              <br />
              - 수유부는 엽산이 부족한 경우가 많이 조사되므로 엽산이 풍부한 푸른 잎 채소, 두류와 엽산 보충제를 적극 복용한다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
