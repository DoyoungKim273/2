import React, { useState } from "react";

export default function BMI() {
  // 상태 변수를 정의
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // BMI 계산 함수
  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100; // cm를 m로 변환
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi(null);
    }
  };

  return (
    <div>
      <div id="bmi-calculator">
        <h2 className="justify-start text-xl text-center font-bold p-2 m-3 bg-purple-400 text-white rounded-2xl">
          BMI 계산기
        </h2>
        <div className="flex flex-col items-center justify-center">
          <input
            type="number"
            id="height"
            placeholder="키 (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="m-10"
          />
          <input
            type="number"
            id="weight"
            placeholder="몸무게 (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="m-10"
          />
          <button
            className="bg-purple-700 text-white p-3 rounded-2xl"
            onClick={calculateBMI}
          >
            BMI 계산
          </button>
        </div>

        <div
          id="result"
          className="text-center font-bold p-2 m-3 bg-purple-300 text-white rounded-2xl"
        >
          {bmi !== null
            ? `당신의 BMI는 ${bmi} 입니다.`
            : "유효한 값을 입력하세요."}
        </div>
      </div>
    </div>
  );
}
