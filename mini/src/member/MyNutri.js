import React, { useEffect, useState } from "react";
import MyHead3 from "./MyHead3";
import { Link } from "react-router-dom";
import NutriConHead from "../nutri/NutriConHead";
import NutriConHead2 from "../nutri/NutriConHead2";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function MyNutri() {
  const [backData, setBackData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_APIKEY}/{id}/NutriResult`
        );
        if (!response.ok) throw new Error("전체 데이터 응답 실패");
        const data = await response.json();
        console.log(data);
        setBackData(data);
      } catch (error) {
        console.error("전체 데이터 로드중 에러 발생", error.message);
      }
    };
    fetchData();
  }, []);

  const displayData = () => {
    return (
      <tbody className="h-10 justify-between text-center">
        <tr>
          <td>번호</td>
          <td>age</td>
          <td>condition1</td>
          <td>condition2</td>
          <td>selectedItems</td>
          <td>날짜</td>
        </tr>
        {/* {backData.map((item, index) => (
            <tr key={index}>
              <td>{item.num}</td>
              <td>{item.age}</td>
              <td>{item.condition1}</td>
              <td>{item.condition2}</td>
              <td>{(item.selectedItems).map(item).join(',')}</td>
              <td>{item.date}</td>
            </tr>
          ))} */}
      </tbody>
    );
  };

  const displayNum1 = () => {
    const firstRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>energy</td>
        <td>carbohydrate</td>
        <td>dietaryFiber</td>
        <td>fat</td>
        <td>linoleic</td>
        <td>protein</td>
        <td>methionine</td>
        <td>leucine</td>
        <td>isoleucine</td>
        <td>valine</td>
        <td>lysine</td>
        <td>threonine</td>
        <td>histidine</td>
        <td>water</td>
        <td>vitA</td>
        <td>vitD</td>
        <td>vitC</td>
      </tr>
    );

    return (
      <tbody className="text-xs items-center justify-center text-center">
        {firstRow}
      </tbody>
    );

    // const firstRow = backData ? backData.nutriTotal.map((item, index) => (
    //   <tr key={index} className="text-xs items-center justify-center text-center">
    //     <td>{item.total}</td>
    //   </tr>
    // )) : [];

    // return(
    //   <tbody className="text-xs items-center justify-center text-center">
    //     {firstRow}
    //   </tbody>
    // )
  };

  const displayNum2 = () => {
    const secondRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>thiamine</td>
        <td>riboflavin</td>
        <td>niacin</td>
        <td>folate</td>
        <td>vitB12</td>
        <td>p</td>
        <td>k</td>
        <td>fe</td>
        <td>zn</td>
        <td>cu</td>
        <td>mn</td>
        <td>se</td>
        <td>ca</td>
        <td>na</td>
        <td>mg</td>
        <td>ala</td>
      </tr>
    );
    return (
      <tbody className="text-xs items-center justify-center text-center">
        {secondRow}
      </tbody>
    );

    // const secondRow = backData ? backData.nutriTotal.map((item, index) => (
    //   <tr key={index} className="text-xs items-center justify-center text-center">
    //     <td>{item.total}</td>
    //   </tr>
    // )) : [];

    // return(
    //   <tbody className="text-xs items-center justify-center text-center">
    //     {secondRow}
    //   </tbody>
    // )
  };

  const displayPer1 = () => {
    const firstRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>energy</td>
        <td>carbohydrate</td>
        <td>dietaryFiber</td>
        <td>fat</td>
        <td>linoleic</td>
        <td>protein</td>
        <td>methionine</td>
        <td>leucine</td>
        <td>isoleucine</td>
        <td>valine</td>
        <td>lysine</td>
        <td>threonine</td>
        <td>histidine</td>
        <td>water</td>
        <td>vitA</td>
        <td>vitD</td>
        <td>vitC</td>
      </tr>
    );

    return (
      <tbody className="text-xs items-center justify-center text-center">
        {firstRow}
      </tbody>
    );

    // const firstRow = backData
    //   ? backData.nutriTotal.map((item, index) => (
    //       <tr
    //         key={index}
    //         className="text-xs items-center justify-center text-center"
    //       >
    //         <td>{item.percentage}</td>
    //       </tr>
    //     ))
    //   : [];

    // return (
    //   <tbody className="text-xs items-center justify-center text-center">
    //     {firstRow}
    //   </tbody>
    // );
  };

  const displayPer2 = () => {
    const secondRow = (
      <tr className="text-xs items-center justify-center text-center">
        <td>thiamine</td>
        <td>riboflavin</td>
        <td>niacin</td>
        <td>folate</td>
        <td>vitB12</td>
        <td>p</td>
        <td>k</td>
        <td>fe</td>
        <td>zn</td>
        <td>cu</td>
        <td>mn</td>
        <td>se</td>
        <td>ca</td>
        <td>na</td>
        <td>mg</td>
        <td>ala</td>
      </tr>
    );
    return (
      <tbody className="text-xs items-center justify-center text-center">
        {secondRow}
      </tbody>
    );

  //   const secondRow = backData
  //   ? backData.nutriTotal.map((item, index) => (
  //       <tr
  //         key={index}
  //         className="text-xs items-center justify-center text-center"
  //       >
  //         <td>{item.percentage}</td>
  //       </tr>
  //     ))
  //   : [];

  // return (
  //   <tbody className="text-xs items-center justify-center text-center">
  //     {secondRow}
  //   </tbody>
  // );
  };

  const displaygraph1 = () => {};

  const displaygraph2 = () => {};

  return (
    <div>
      <div className="justify-start text-xl text-center font-bold p-2 m-5 text-slate-900">
        🍱 나의 식단 기록 🍱
      </div>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
        <table className="w-11/12 border m-3 rounded-2xl">
          <MyHead3 />
          {displayData()}
        </table>
      </div>
      <hr></hr>
      <div className="w-full flex flex-col justify-center items-center p-2 m-3">
        <div className="text-xl text-center font-bold p-2 m-5 text-slate-900">
          📊 합산 결과 📊
        </div>
        <div className="w-full flex flex-col justify-center items-center px-2 mx-3 mb-20">
          <div className="w-4/5 text-xs text-end">
            * 각 영양소 클릭 시 식사지도 페이지로 이동합니다.
            <br /> * 권장섭취량 미만 '분홍', 100% 이상 150% 미만 '노랑', 150%
            이상 '보라'색으로 표시됩니다.
          </div>
          <div className="flex flex-row mt-5 mr-16 ">
            <BarChart width={700} height={300} data={displaygraph1()}>
              <XAxis dataKey="name" stroke="#00000" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="percentage" fill="#fcd34d" barSize={30} />
            </BarChart>
            <BarChart width={700} height={300} data={displaygraph2}>
              <XAxis dataKey="name" stroke="#00000" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="percentage" fill="#fcd34d" barSize={30} />
            </BarChart>
          </div>
          <div className="w-4/5 mt-3 text-xs text-end">
            * 식사지도 페이지는 주요 영양소를 중심으로 지원됩니다.
          </div>
          <table className="w-4/5 border m-3">
            <NutriConHead />
            {displayNum1()}
            {displayPer1()}
          </table>
          <table className="w-4/5 border m-3">
            <NutriConHead2 />
            {displayNum2()}
            {displayPer2()}
          </table>
          <Link
            to="/MyPage"
            className=" m-5 bg-amber-100 hover:bg-amber-300 text-slate-800 p-3 text-center rounded-3xl w-36 font-bold"
          >
            마이페이지
          </Link>
        </div>
      </div>
    </div>
  );
}
