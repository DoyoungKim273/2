import React from "react";
import NutriHead from "./NutriHead";
import NutriDetail from "./NutriDetail";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NutriCal() {
  const [group1, setGroup1] = useState([]);
  const [selectGroup, setSelectedGroup] = useState([]);
  const selRef = useRef();
  const [foodname1, setFoodName1] = useState([]);
  const [foodname2, setFoodName2] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const responses = await Promise.all([
          fetch(`http://${process.env.REACT_APP_APIKEY}/group1`),
          fetch(`http://${process.env.REACT_APP_APIKEY}/foodname1`),
          fetch(`http://${process.env.REACT_APP_APIKEY}/foodname2`)
        ]);
        const datas = await Promise.all(responses.map(res => {
          if (!res.ok) throw new Error("전체 데이터 응답 실패");
          return res.json();
        }));
        setGroup1(datas[0]);
        setFoodName1(datas[1]);
        setFoodName2(datas[2]);
      } catch (error) {
        console.error("전체 데이터 로드 중 에러 발생", error.message);
      }
    };
  
    fetchInitialData();
  }, []);

  const handleSelG1 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedGroup(selectedValue);
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/group1`
      );
      if (!response.ok) {
        throw new Error("G1 응답이 돌아오지 않음");
      }
      const data = await response.json();
      console.log(data);
      console.log(selectedValue)
    } catch (error) {
      console.error("G1 데이터 불러오기 중 에러 발생", error.message);
    }
  };

  const handleSelN1 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedGroup(selectedValue);
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/foodname1`
      );
      if (!response.ok) {
        throw new Error("FN1 응답이 돌아오지 않음");
      }
      const data = await response.json();
      console.log(data);
      console.log(selectedValue)
    } catch (error) {
      console.error("FN1 데이터 불러오기 중 에러 발생", error.message);
    }
  };

  const handleSelN2 = async (event) => {
    const selectedValue = event.target.value;
    setSelectedGroup(selectedValue);
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/foodname2`
      );
      if (!response.ok) {
        throw new Error("FN2 응답이 돌아오지 않음");
      }
      const data = await response.json();
      console.log(data);
      console.log(selectedValue)
    } catch (error) {
      console.error("FN2 데이터 불러오기 중 에러 발생", error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div>
        <h2 className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
          🍱 식단을 통한 영양 평가 🍱
        </h2>
        <hr></hr>
        <div className="m-10 flex flex-row items-center justify-center">
          <select
            id="group1"
            onChange={handleSelG1}
            ref={selRef}
            className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl"
          >
            <option>--- 식품 대분류 선택 ---</option>
            {group1.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select
            id="foodname1"
            onChange={handleSelN1}
            ref={selRef}
            className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl"
          >
            <option>--- 대표 식품명 선택 ---</option>
            {foodname1.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select
            id="foodname2"
            onChange={handleSelN2}
            ref={selRef}
            className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl"
          >
            <option>--- 식품 중분류 선택 ---</option>
            {foodname2.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="▶ 식품 키워드 입력"
            className="m-8 p-3 bg-slate-200 w-1/4 rounded-2xl"
          ></input>
          <button className=" m-5 bg-purple-400 text-white p-3 rounded-2xl w-36 font-bold">
            입력
          </button>
          <button className=" m-5 bg-purple-600 text-white p-3 rounded-2xl w-36 font-bold">
            취소
          </button>
        </div>
        <hr></hr>
        <div className="text-center text-xl font-bold p-2 m-3 text-slate-900">
          📄 선택한 음식 목록 📄
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <table className="w-11/12 border m-3 rounded-2xl">
            <NutriHead />
          </table>
          <Link
            to="/NutriDetail"
            className="w-48 items-center justify-center text-center font-bold p-2 m-3 bg-purple-400 text-white rounded-2xl"
          >
            상세보기 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
