import React, { useState } from "react";

export default function BMI() {
  // 상태 변수를 정의합니다.
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // BMI 계산 함수입니다.
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
        <h2 className="text-xl font-bold">BMI 계산기</h2>
        <div></div>
        <input
          type="number"
          id="height"
          placeholder="키 (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          id="weight"
          placeholder="몸무게 (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={calculateBMI}>BMI 계산</button>
        <div id="result">
          {bmi !== null
            ? `당신의 BMI는 ${bmi} 입니다.`
            : "유효한 값을 입력하세요."}
        </div>
      </div>
    </div>
  );
}
