import React from "react";
import fe from "../img/guide/fe.png";
import ca1 from "./pic/ca1.png"
import fe1 from "./pic/fe1.png"
import fe2 from "./pic/fe2.png"


export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 철(Fe) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={fe} alt="fe" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={ca1} alt="ca1" className="w-32 h-32 mx-5"></img>
          <img src={fe1} alt="fe1" className="w-32 h-32 mx-5"></img>
          <img src={fe2} alt="fe2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 철(Fe)이란?</div>
            <div>
              - 철은 체내에서 산소를 조직으로 이동 및 저장하는데 관여하고 여러 효소의 보조인자로 작용하는 성분이다.
              <br />
              - 철의 급원으로 가장 좋은 식품은 대부분 햄철을 함유하고 있는 육류, 어패류, 가금류이다.
              <br />
              - 그 다음으로 좋은 급원은 곡류나 곡류로 만든 가공식품, 콩류 및 진한 녹색 채소 등이다.
              <br />
              - 철이 결핍될 경우 적혈구의 수가 줄어들어 빈혈 증세가 나타난다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 철(Fe)</div>
            <div>
              - 임신기에는 많은 양의 철이 필요한데 모체는 월경의 정지로 철을 저장하고 철분 흡수율 또한 증가시킨다.
              <br />
              - 우리나라 임산부의 철 권장섭취량은 24mg으로 비임신부에 비해 10mg 추가된다.
              <br />
              - 철은 간이나 육류, 어류, 가금류, 달걀, 녹황색 채소류에 풍부하나 철 보충제 또한 권장된다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 철(Fe)</div>
            <div>
              - 수유부에 있어 가장 흔한 영양결핍증은 철 결핍으로 인한 빈혈증으로 조사된다.
              <br />
              - 이에 간이나 육류, 어류, 가금류, 달걀, 녹황색 채소류의 충분한 섭취가 필요하며 철 보충제 또한 권장된다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}