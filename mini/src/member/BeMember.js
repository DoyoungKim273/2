import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BeMember() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCondition1, setUserCondition1] = useState("");
  const [userCondition2, setUserCondition2] = useState("");

  const navigate = useNavigate();

  const handleidChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleConditionChange1 = (event) => {
    setUserCondition1(event.target.value);
  };

  const handleConditionChange2 = (event) => {
    setUserCondition2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_APIKEY}/bemember`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, password, userAge, userCondition1, userCondition2 }),
        }
      );

      if (response.ok) {
        console.log("회원가입 성공");
        alert("회원가입에 성공하였습니다.")
        navigate(`/`)
      } else {
        console.log("회원가입 실패");
        alert("회원가입에 실패하였습니다.")
      }
    } catch (error) {
      console.error("네트워크 오류", error.message);
      alert("네트워크 오류로 회원가입에 실패하였습니다.")
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          📲 회원가입 페이지 📲
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="m-10 flex flex-row items-center justify-center">
            <select
              id="age"
              onChange={handleAgeChange}
              value={userAge}
              className=" w-56 mx-8 p-3 bg-amber-100 hover:bg-amber-200  rounded-2xl  text-slate-600"
            >
              <option>--- 사용자 연령 선택 ---</option>
              <option value="19~29">19 ~ 29세</option>
              <option value="30~49">30 ~ 49세</option>
            </select>
            <select
              id="state1"
              onChange={handleConditionChange1}
              value={userCondition1}
              className="w-56 mx-8 p-3 bg-amber-100  hover:bg-amber-200  rounded-2xl text-slate-600"
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
              className="w-56 mx-8 p-3 bg-amber-100  hover:bg-amber-200 rounded-2xl"
              id="state2"
              onChange={handleConditionChange2}
              value={userCondition2}
            ></input>
          </div>
          <div>
            <label for="id" className="block font-bold leading-6 text-gray-900">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="id"
                name="id"
                type="id"
                required
                value={id}
                onChange={handleidChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
              ></input>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block font-bold leading-6 text-gray-900"
              >
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-amber-100 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-800 shadow-sm hover:bg-amber-500"
              onChange={handleSubmit}
            >
              회원가입
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to="/Login"
            className="font-semibold leading-6 text-purple-950 hover:text-amber-700"
          >
            로그인 바로가기
          </Link>
        </p>
      </div>
    </div>
  );
}
