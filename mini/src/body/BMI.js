import React, { useEffect, useState } from "react";
import BMItable from "../img/BMItable.png";
export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCate, setBmiCate] = useState("");

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
  };

  return (
    <div>
      <div id="bmi-calculator">
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          ⏲ BMI (체질량지수) 계산기 ⏲
        </h2>
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
            placeholder="몸무게 (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="m-10 p-3 bg-slate-200 w-1/4 rounded-2xl"
          />
          <button
            className="bg-purple-700 text-white text-bold w-40 p-3 rounded-2xl"
            onClick={calculateBMI}
          >
            BMI 계산
          </button>
        </div>
        <hr></hr>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 text-slate-900">
          📊 계산 결과 📊
        </h2>
        <div className="bg-purple-200 m-5 p-2">
          <div
            id="result1"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmi !== null
              ? `당신의 BMI는 ${bmi} 입니다.`
              : "유효한 값을 입력하세요."}
          </div>
          <div
            id="result2"
            className="text-center font-bold p-2 m-3 text-purple-950"
          >
            {bmiCate !== ""
              ? `당신은 " ${bmiCate} " 입니다.`
              : "유효한 값을 입력하세요."}
          </div>
        </div>
        <div
          id="result3"
          className="bg-pink-200 m-5 text-center font-bold p-2  text-pink-950"
        >
          {bmiCate !== ""
            ? `당신의 임신 전 체중에 따른 임신기 동안의 권장 체중 증가량은 " ${bmiCate} " 입니다.`
            : "유효한 값을 입력하세요."}
        </div>

        <hr></hr>
        <div className="items-center justify-center flex">
          <img src={BMItable} alt="BMItable"></img>
        </div>
      </div>
    </div>
  );
}
