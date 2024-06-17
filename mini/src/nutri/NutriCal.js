import React from "react";
import NutriHead from "./NutriHead";
import { useState, useEffect } from "react";
import NutriConHead from "./NutriConHead";
import NutriConHead2 from "./NutriConHead2";
import Papa from "papaparse";

export default function NutriCal() {
  const [selectedCode1, setSelectedCode1] = useState("");
  const [selectedCode2, setSelectedCode2] = useState("");
  const [selectedCode3, setSelectedCode3] = useState("");
  const [code1name, setcode1name] = useState([]);
  const [code2name, setcode2name] = useState([]);
  const [code3name, setcode3name] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [nutriNeeds, setNutriNeeds] = useState({});
  const [userAge, setUserAge] = useState("");
  const [userCondition1, setUserCondition1] = useState("");
  const [userCondition2, setUserCondition2] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_APIKEY}/code1name`
        );
        if (!response.ok) throw new Error("전체 데이터 응답 실패");
        const data = await response.json();
        setcode1name(data);
        console.log(data);
      } catch (error) {
        console.error("전체 데이터 로드 중 에러 발생", error.message);
      }
    };

    fetchInitialData();
  }, []);

  const parseCsvData = (csvText) => {
    Papa.parse(csvText, {
      complete: (results) => {
        console.log("파싱 결과", results);
        const formattedData = {};
        results.data.forEach((row) => {
          formattedData[row.from] = row;
        });
        setNutriNeeds(formattedData);
        console.log("formattedData 값", formattedData);
      },
      header: true,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/fi_standard.csv");
        if (!response.ok) throw new Error("네트워크 응답 실패");
        const text = await response.text();
        parseCsvData(text);
      } catch (error) {
        console.error("데이터 패치 실패", error);
      }
    };
    fetchData();
  }, []);

  const handleAgeChange = (event) => {
    const age = event.target.value;
    setUserAge(age);
    updateUserState(age, userCondition1);
  };

  const handleConditionChange1 = (event) => {
    const condition1 = event.target.value;
    setUserCondition1(condition1);
    updateUserState(userAge, condition1);
  };

  const handleConditionChange2 = (event) => {
    const condition2 = event.target.value;
    setUserCondition2(condition2);
    updateUserState(userAge, condition2);
  };

  const updateUserState = (age, condition1) => {
    if (age && condition1) {
      const key = `${condition1}_${age}`;
      console.log(age);
      console.log(condition1);
      console.log(key);
      if (nutriNeeds[key]) {
        console.log("매칭되는 영양 데이터", nutriNeeds[key]);
      } else {
        console.error("매칭되는 영양 데이터가 찾아지지 않음.");
      }
    }
  };

  const handleSelectItem = async (item) => {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/nutri?id=${item.id}`
      );
      if (!response.ok) throw new Error("영양 정보 불러오기 실패");
      const nutriData = await response.json();
      item.nutriInfo = nutriData;
      console.log("영양 정보", item.nutriInfo);
      setSelectedItems((prevItems) => [...prevItems, item]);
      setSearchResult([]);
    } catch (error) {
      console.error("영양정보 불러오기 중 예외 발생", error.message);
    }
  };

  const handleSearch = async () => {
    if (!userAge || !userCondition1) {
      alert("사용자 연령과 임신 / 수유 여부를 입력해주세요.");
      return;
    }

    setSearchResult([]);

    if (selectedCode1 && !selectedCode2 && !keyword) {
      alert("중분류 또는 키워드를 입력해주세요.");
      return;
    }

    let url = "";

    if (selectedCode1 && selectedCode2 && selectedCode3) {
      url = `http://${process.env.REACT_APP_APIKEY}/allSelect/${selectedCode1}/${selectedCode2}/${selectedCode3}`;
      if (keyword.trim() !== "") {
        url = `http://${
          process.env.REACT_APP_APIKEY
        }/allSelect/${selectedCode1}/${selectedCode2}/${selectedCode3}/${encodeURIComponent(
          keyword
        )}`;
      }
    } else if (selectedCode1 && selectedCode2) {
      url = `http://${process.env.REACT_APP_APIKEY}/foodname/${selectedCode1}/${selectedCode2}`;
      if (keyword.trim() !== "") {
        url += `/${encodeURIComponent(keyword)}`;
      }
    } else if (keyword.trim() !== "") {
      url = `http://${
        process.env.REACT_APP_APIKEY
      }/foodname/${encodeURIComponent(keyword)}`;
    }

    if (selectedCode1 && !selectedCode2 && !keyword) console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("키워드 검색 실패");
      }
      const data = await response.json();
      setSearchResult((prevResults) => [...prevResults, ...data]);
      console.log(searchResult);
      console.log(data);

      setSelectedCode1("");
      setSelectedCode2("");
      setSelectedCode3("");
      setKeyword("");
    } catch (error) {
      console.error("키워드 검색 데이터 로드 중 에러 발생", error.message);
    }
  };

  const handleSelC1 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCode1(selectedValue);
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/code2name/${selectedValue}`
      );
      if (!response.ok) {
        throw new Error("중분류 데이터 로드 실패");
      }
      const data = await response.json();
      setcode2name(data);
      console.log(data);
      console.log(selectedValue);
    } catch (error) {
      console.error("중분류 데이터 불러오기 중 에러 발생", error.message);
    }
  };

  const handleSelC2 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCode2(selectedValue);
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/code3name/${selectedCode1}/${selectedValue}`
      );
      if (!response.ok) {
        throw new Error("소분류 데이터 로드 실패");
      }
      const data = await response.json();
      setcode3name(data);
      console.log(data);
      console.log(selectedValue);
    } catch (error) {
      console.error("소분류 데이터 불러오기 중 에러 발생", error.message);
    }
  };

  const handleSelC3 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCode3(selectedValue);
    console.log(selectedValue);
  };

  const displaySelectedItems = () => {
    return (
      <tbody className="h-10 justify-between text-center">
        {searchResult &&
          searchResult.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="mx-2"
                  type="checkbox"
                  onChange={() => handleSelectItem(item)}
                />
                {item.code1name}
              </td>
              <td>{item.code2name}</td>
              <td>{item.code3name}</td>
              <td>{item.originname}</td>
              <td>{item.foodname}</td>
            </tr>
          ))}
      </tbody>
    );
  };

  const displayChosenItems = () => {
    return (
      <tbody className="h-10 justify-between text-center">
        {selectedItems.map((item, index) => (
          <tr key={index}>
            <td>{item.code1name}</td>
            <td>{item.code2name}</td>
            <td>{item.code3name}</td>
            <td>{item.originname}</td>
            <td>{item.foodname}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  const nutriplus = () => {
    const totals = selectedItems.reduce(
      (acc, item) => {
        acc.energy += item.nutriInfo.energy || 0;
        acc.carbohydrate += item.nutriInfo.carbohydrate || 0;
        acc.dietaryFiber += item.nutriInfo.dietaryFiber || 0;
        acc.fat += item.nutriInfo.fat || 0;
        acc.linoleic += item.nutriInfo.linoleic || 0;
        acc.protein += item.nutriInfo.protein || 0;
        acc.methionine += item.nutriInfo.methionine || 0;
        acc.leucine += item.nutriInfo.leucine || 0;
        acc.isoleucine += item.nutriInfo.isoleucine || 0;
        acc.valine += item.nutriInfo.valine || 0;
        acc.lysine += item.nutriInfo.lysine || 0;
        acc.histidine += item.nutriInfo.histidine || 0;
        acc.water += item.nutriInfo.water || 0;
        acc.vitA += item.nutriInfo.vitA || 0;
        acc.vitD += item.nutriInfo.vitD || 0;
        acc.vitC += item.nutriInfo.vitC || 0;
        acc.thiamine += item.nutriInfo.thiamine || 0;
        acc.riboflavin += item.nutriInfo.riboflavin || 0;
        acc.niacin += item.nutriInfo.niacin || 0;
        acc.folate += item.nutriInfo.folate || 0;
        acc.vitB12 += item.nutriInfo.vitB12 || 0;
        acc.p += item.nutriInfo.p || 0;
        acc.ala += item.nutriInfo.ala || 0;
        acc.mg += item.nutriInfo.mg || 0;
        acc.cu += item.nutriInfo.cu || 0;
        acc.na += item.nutriInfo.na || 0;
        acc.k += item.nutriInfo.k || 0;
        acc.fe += item.nutriInfo.fe || 0;
        acc.mn += item.nutriInfo.mn || 0;
        acc.zn += item.nutriInfo.zn || 0;
        acc.ca += item.nutriInfo.ca || 0;
        acc.se += item.nutriInfo.se || 0;

        return acc;
      },
      {
        energy: 0,
        carbohydrate: 0,
        dietaryFiber: 0,
        fat: 0,
        linoleic: 0,
        protein: 0,
        methionine: 0,
        leucine: 0,
        isoleucine: 0,
        valine: 0,
        lysine: 0,
        threonine: 0,
        histidine: 0,
        water: 0,
        vitA: 0,
        vitD: 0,
        vitC: 0,
        thiamine: 0,
        riboflavin: 0,
        niacin: 0,
        folate: 0,
        vitB12: 0,
        p: 0,
        ala: 0,
        mg: 0,
        cu: 0,
        na: 0,
        k: 0,
        fe: 0,
        mn: 0,
        zn: 0,
        ca: 0,
        se: 0,
      }
    );

    Object.keys(totals).forEach((key) => {
      totals[key] = parseFloat(totals[key].toFixed(2));
    });

    return totals;
  };

  const displayGainResults1 = () => {
    const totals = nutriplus();

    const firstRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>{totals.energy}</td>
        <td>{totals.carbohydrate}</td>
        <td>{totals.dietaryFiber}</td>
        <td>{totals.fat}</td>
        <td>{totals.linoleic}</td>
        <td>{totals.protein}</td>
        <td>{totals.methionine}</td>
        <td>{totals.leucine}</td>
        <td>{totals.isoleucine}</td>
        <td>{totals.valine}</td>
        <td>{totals.lysine}</td>
        <td>{totals.threonine}</td>
        <td>{totals.histidine}</td>
        <td>{totals.water}</td>
        <td>{totals.vitA}</td>
        <td>{totals.vitD}</td>
        <td>{totals.vitC}</td>
      </tr>
    );

    return (
      <tbody className="text-xs items-center justify-center text-center">
        {firstRow}
      </tbody>
    );
  };

  const displayGainResults2 = () => {
    const totals = nutriplus();

    const secondRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>{totals.thiamine}</td>
        <td>{totals.riboflavin}</td>
        <td>{totals.niacin}</td>
        <td>{totals.folate}</td>
        <td>{totals.vitB12}</td>
        <td>{totals.p}</td>
        <td>{totals.k}</td>
        <td>{totals.fe}</td>
        <td>{totals.zn}</td>
        <td>{totals.cu}</td>
        <td>{totals.mn}</td>
        <td>{totals.se}</td>
        <td>{totals.ca}</td>
        <td>{totals.na}</td>
        <td>{totals.mg}</td>
        <td>{totals.ala}</td>
      </tr>
    );
    return (
      <tbody className="text-xs items-center justify-center text-center">
        {secondRow}
      </tbody>
    );
  };

  const calGain = () => {
    const totals = nutriplus();
    const key = `${userCondition1}_${userAge}`;
    const needs = nutriNeeds[key];
    if (!needs) {
      console.log("선택된 연령과 상태에 대한 값이 없음.");
      return {};
    }

    const gain = {};
    Object.keys(needs).forEach((key) => {
      gain[key] = {
        required: needs[key],
        intake: totals[key] || 0,
        percentage: (((totals[key] || 0) / needs[key]) * 100).toFixed(1),
      };
    });
    return gain;
  };

  const displayResult1 = () => {
    const results = calGain();
    if (!results || Object.keys(results).length === 0) {
      return;
    }

    const keysToDisplay = Object.keys(results).slice(2, 19);

    return (
      <tbody>
        {keysToDisplay.map((key) => (
          <td
            className={`text-xs text-center ${
              results[key].percentage >= 100 ? "bg-pink-200" : "bg-amber-50"
            }`}
          >
            {results[key].percentage}%
          </td>
        ))}
      </tbody>
    );
  };

  const displayResult2 = () => {
    const results = calGain();
    if (!results || Object.keys(results).length === 0) {
      return;
    }

    const keysToDisplay = Object.keys(results).slice(19);

    return (
      <tbody>
        {keysToDisplay.map((key) => (
          <td
            className={`text-xs text-center ${
              results[key].percentage >= 100 ? "bg-pink-200" : "bg-amber-50"
            }`}
          >
            {results[key].percentage}%
          </td>
        ))}
      </tbody>
    );
  };

  const handleSaveResults = async () => {
    const dataToSave = {
      age: userAge,
      condition1: userCondition1,
      condition2: userCondition2,
      selectedItems: selectedItems,
      nutriTotal: nutriplus(),
      nutriPersentage: calGain(),
    };

    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/userdata`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSave),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        alert("입력된 정보가 성공적으로 저장되었습니다.");
      } else {
        throw new Error("서버에 문제가 발생하였습니다.");
      }
    } catch (error) {
      console.error("입력된 정보 저장 중 에러 발생", error.message);
      alert("입력된 정보 저장 중 문제가 발생하였습니다.");
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <div>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
          🍱 식단을 통한 영양 평가 🍱
        </h2>
        <hr></hr>
        <div className="m-7 flex flex-row items-center justify-center">
          <select
            id="age"
            onChange={handleAgeChange}
            value={userAge}
            className="mx-8 p-3 bg-amber-100 hover:bg-amber-200 w-1/4 rounded-2xl  text-slate-600"
          >
            <option>--- 사용자 연령 선택 ---</option>
            <option value="19~29">19 ~ 29세</option>
            <option value="30~49">30 ~ 49세</option>
          </select>
          <select
            id="state1"
            onChange={handleConditionChange1}
            value={userCondition1}
            className="mx-8 p-3 bg-amber-100  hover:bg-amber-200 w-1/4 rounded-2xl text-slate-600"
          >
            <option>--- 임신 / 수유 여부 선택 ---</option>
            <option value="preg1">임신 1분기( ~ 12주)</option>
            <option value="preg2">임신 2분기(13주 ~ 18주)</option>
            <option value="preg3">임신 3분기(19주 ~ 40주)</option>
            <option value="nursing">수유기</option>
          </select>
          <input
            type="number"
            placeholder="▶ 주 수 입력"
            className="mx-8 p-3 bg-amber-100  hover:bg-amber-200 w-1/4 rounded-2xl"
            id="state2"
            onChange={handleConditionChange2}
            value={userCondition2}
          ></input>
        </div>
        <div className="m-5 flex flex-row items-center justify-center">
          <select
            id="code1name"
            onChange={handleSelC1}
            value={selectedCode1}
            className="mx-8 p-3 bg-slate-200 hover:bg-slate-300 w-1/4 rounded-2xl  text-slate-600"
          >
            <option>--- 식품 대분류 선택 ---</option>
            {code1name.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select
            id="code2name"
            onChange={handleSelC2}
            value={selectedCode2}
            className="mx-8 p-3 bg-slate-200  hover:bg-slate-300 w-1/4 rounded-2xl  text-slate-600"
          >
            <option>--- 식품 중분류 선택 ---</option>
            {code2name.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select
            id="foodname2"
            onChange={handleSelC3}
            value={selectedCode3}
            className="mx-8 p-3 bg-slate-200  hover:bg-slate-300 w-1/4 rounded-2xl  text-slate-600"
          >
            <option>--- 식품 소분류 선택 ---</option>
            {code3name.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="▶ 식품 키워드 입력"
            className="mx-8 p-3 bg-slate-200 hover:bg-slate-300  w-1/4 rounded-2xl"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <button
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 rounded-3xl w-40 font-bold"
            onClick={handleSearch}
          >
            검색
          </button>
        </div>

        <hr></hr>
        <div className="text-center text-xl font-bold p-2 m-3 text-slate-900">
          📄 검색된 음식 목록 📄
        </div>
        <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <div className="w-11/12 text-xs text-end">
            * 검색 목록 중 섭취한 음식을 체크합니다.
          </div>
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
            {displaySelectedItems()}
          </table>
        </div>
        <hr></hr>
        <div className="text-center text-xl font-bold p-2 m-3 text-slate-900">
          ✅ 선택한 음식 목록 ✅
        </div>
        <div className="w-full flex flex-col justify-center items-center p-2 m-3">
          <div className="w-11/12 text-xs text-end">
            * 영양소 수치는 식품의약품안전처 식품영양성분DB를 바탕으로
            계산됩니다.
          </div>
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
            {displayChosenItems()}
          </table>
        </div>
        <hr></hr>
        <div className="text-xl text-center font-bold p-2 m-5 text-slate-900">
          📊 합산 결과 📊
        </div>
        <div className="w-full flex flex-col justify-center items-center px-2 mx-3 mb-20">
          <div className="w-4/5 text-xs text-end">
            * 각 영양소 클릭 시 식사지도 페이지로 이동합니다.
            <br /> * 권장섭취량이 충족된 영양소는 분홍색으로 표시됩니다.
          </div>
          <table className="w-4/5 border m-3">
            <NutriConHead />
            {displayGainResults1()}
            {displayResult1()}
          </table>
          <table className="w-4/5 border m-3">
            <NutriConHead2 />
            {displayGainResults2()}
            {displayResult2()}
          </table>
          <button
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 rounded-3xl w-36 font-bold"
            onClick={handleSaveResults}
          >
            결과 저장
          </button>
        </div>
      </div>
    </div>
  );
}
