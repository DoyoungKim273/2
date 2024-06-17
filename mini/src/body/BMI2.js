// 수정 확인 1014
import React, { useEffect, useState } from "react";
import BMItable from "../img/BMItable.png";
export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCate, setBmiCate] = useState("");
  const [inputWeek, setInputWeek] = useState("");
  const [weekGain, setWeekGain] = useState("");

  // BMI 계산 함수
  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100; // cm를 m로 변환
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiCate("저체중");
      } else if (bmiValue >= 18.5 && bmiValue < 23) {
        setBmiCate("정상체중");
      } else if (bmiValue >= 23 && bmiValue < 25) {
        setBmiCate("과체중");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCate("비만");
      } else if (bmiValue >= 30 && bmiValue < 35) {
        setBmiCate("고도비만");
      } else {
        setBmiCate("초고도비만");
      }
    } else {
      setBmi(null);
    }

    const weekPassed = parseInt(inputWeek);
    if (weekPassed > 0) {
      const recommendedGain = weekPassed * 0.5;
      setWeekGain(recommendedGain.toFixed(2));
    } else {
      setWeekGain("");
    }
  };

  return (
    <div className="min-h-screen">
      <div id="bmi-calculator">
        <div>
          <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
            ⏲ 수유부를 위한 바람직한 체중 계산기 ⏲
          </h2>
          <div className="text-end text-xs mb-3 mx-5">
            * 계산은 대한산부인과학회의 기준을 바탕으로 합니다.
          </div>
        </div>

        <hr></hr>
        <div className="flex flex-row items-center justify-center">
          <input
            type="number"
            id="height"
            placeholder="키 (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <input
            type="number"
            id="weight"
            placeholder="현재 몸무게 (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <input
            type="number"
            id="week"
            placeholder="출산 후 경과 주수"
            value={inputWeek}
            onChange={(e) => setInputWeek(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <button
            className="bg-purple-800 hover:bg-purple-500 text-white text-bold w-40 p-3 rounded-2xl"
            onClick={calculateBMI}
          >
            BMI 계산
          </button>
        </div>
        <hr></hr>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          📊 계산 결과 📊
        </h2>
        <div className="bg-purple-200 m-5 p-2 rounded-2xl">
          <div
            id="result1"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmi !== null
              ? `당신의 BMI는 ${bmi} 입니다.`
              : " 신장과 몸무게를 입력하면 체질량지수(BMI)를 산출합니다."}
          </div>
          <div
            id="result2"
            className="text-center font-bold p-2 m-3 text-purple-950 "
          >
            {bmiCate !== ""
              ? `➡ 당신은 " ${bmiCate} " 입니다. ⬅`
              : "신장과 몸무게를 입력하면 체질량지수(BMI)의 단계를 판정합니다."}
          </div>
        </div>
        <div className="bg-pink-200 m-5 text-center font-bold p-2  text-pink-950 rounded-2xl">
          {weekGain !== ""
            ? `지금 시점에서 당신의 체중은 임신 당시 체중에서 "${weekGain}kg" 을 뺀 값이 적당합니다.`
            : "신장과 몸무게를 입력하면 적정한 체중 감소량을 산출합니다."}
        </div>
        <div className="bg-pink-100 m-5 text-center font-bold p-2  text-pink-950 rounded-2xl">
          {weekGain !== ""
            ? `단, 현재 체중인 "${weight}kg"에서 "${weekGain}kg" 을 뺀 값이 임신 전 체중보다 작다면 이 값은 유효하지 않습니다.`
            : "단, 현재 당신이 임신 전에 비해 저체중이라면 이 수치는 유효하지 않습니다."}
        </div>
        <hr></hr>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          🍼 모유 수유 더 알아보기 (바로가기) 🍼
        </h2>
        <div className="flex-row flex">
          <div className="m-5 p-5 w-1/3 bg-purple-100 hover:bg-purple-300 rounded-2xl">
            <a href="https://bfmed.co.kr/re/" className="font-bold text-lg">
              💜 대한모유수유의학회
            </a>
            <div>
              - 모유 먹이기, 아이 돌보기에 대한 정보 제공
              <br />- 모유수유 Q&A 게시판 운영, 모유수유 관련 사이트 소개
            </div>
          </div>
          <div className="m-5 p-5 w-1/3 bg-purple-100 hover:bg-purple-300 rounded-2xl">
            <a
              href="https://www.pediatrics.or.kr/bbs/?code=infantcare&category=A&gubun=B"
              className="font-bold text-lg"
            >
              💜 대한소아청소년과학회 - 모유 수유
            </a>
            <div>
              - 모유 수유 시 유의점, 모유 수유 체크리스트 안내
              <br />- 그 외 신생아 피부관리, 수면, 영아 산통 등에 대한 정보 제공
              제공
            </div>
          </div>
          <div className="m-5 p-5 w-1/3 bg-purple-100  hover:bg-purple-300 rounded-2xl">
            <a
              href="https://www.koreanursing.or.kr/leading_initiatives/breast_feeding_faq.php"
              className="font-bold text-lg"
            >
              💜 대한간호협회 - 모유 수유 방법
            </a>
            <div>
              - 모유 수유 방법, 모유 수유의 장점에 대해 자세히 소개
              <br />- 모유 수유 과정에서 자주 하는 질문에 대한 전문적인 답변
              제공
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
