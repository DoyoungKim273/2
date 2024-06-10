import React from "react";
import vitBcomp2 from "../img/guide/vitBcomp2.png";
export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
        🍎 수용성 비타민 - 비타민 B군②(비오틴, 엽산 등) 🍎
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={vitBcomp2} alt="vitBcomp2" className="p-10"></img>
        <ul className="m-7">
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
            <div className="font-bold text-lg"> 💜 임신, 수유기의 비타민 B군②(비오틴, 엽산 등)</div>
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
