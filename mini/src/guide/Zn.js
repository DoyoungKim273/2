import React from "react";
import zn from "../img/guide/zn.png";
import zn1 from "./pic/zn1.png"
import zn2 from "./pic/zn2.png"
import prot2 from "./pic/prot2.png"


export default function Carb() {
  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
      🧀 무기질 - 아연(Zn) 🧀
      </div>
      <hr></hr>
      <div className="flex flex-row justify-center">
        <img src={zn} alt="zn" className="p-5"></img>
        <ul className="m-7">
        <div className="justify-end flex flex-row mx-10">
          <img src={zn1} alt="zn1" className="w-32 h-32 mx-5"></img>
          <img src={zn2} alt="zn2" className="w-32 h-32 mx-5"></img>
          <img src={prot2} alt="prot2" className="w-32 h-32 mx-5"></img>
          </div>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 아연(Zn)이란?</div>
            <div>
              - 아연은 체내에 1.5g ~ 2.5g 정도로 소량 존재하지만 생체 내 여러 효소의 구성성분이 되는 필수 미량 원소이다.
              <br />
              - 아연은 체내에서 생체 내 여러 금속 효소의 구성 요소가 되고 생체막의 구조와 기능에 관여하며 면역 기능을 유지한다.
              <br />
              - 아연의 주된 급원은 동물성 식품으로 쇠고기를 비롯한 육류, 간, 굴, 게, 새우 등의 패류가 좋은 공급원이다.
              <br />
              - 식이를 통한 아연의 섭취가 부족하더라도 아연의 흡수나 배설을 통해 항상성이 유지되도록 체내에서 어느정도 조절이 가능하다.
              <br />
              - 하지만 가임기 여성의 경우 아연 영양이 저조해지기 쉽기에 유의해야한다.
              </div>

          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 임신기의 아연(Zn)</div>
            <div>
              - 아연은 DNA와 RNA의 합성에 관여하여 생식과 번식에 중요한 역할을 하는 영양소이다.
              <br />
              - 임신 14주째 혈청 아연 농도가 낮은 여성들에게서 조산, 자연 유산, 선천성 기형 등이 보고된다.
              <br />
              - 최근에는 입덧과의 관련성이 제기되므로 아연의 섭취에 유의해야한다.
              <br />
              - 아연은 굴, 육류, 가금류 등의 동물성 식품에 풍부하다.
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <div className="font-bold text-lg"> 💜 수유기의 아연(Zn)</div>
            <div>
              - 유부의 아연 필요량은 성인여성에게 필요한 아연량에 모유로 분비되는 아연의 양만큼을 부가해야 한다.
              <br/> - 수유시 부가적으로 필요한 양은 5.15 mg/일로 정한다.
            </div>
          </li>
          <div className="text-end text-sm mx-10">
          출처 : 21세기 영양학(6판, 최혜미 저, 교문사), 생애주기 영양학(5판, 김은경 저, 신광출판사), 2020 한국인영양소섭취기준(KDRIs)  
          </div>
        </ul>
      </div>
    </div>
  );
}
