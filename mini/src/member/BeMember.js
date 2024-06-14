import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BeMember() {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleidChange = (event) => {
    setId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmitChange = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch (`http://${process.env.REACT_APP_APIKEY}/bemember`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id, password}),
    });

    if(response.ok){
      console.log("회원가입 성공")
    } else {
      console.log("회원가입 실패")
    }
  } catch (error){
    console.error("네트워크 오류", error.message);
  }
}

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          📲 회원가입 페이지 📲
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="id"
              className="block font-bold leading-6 text-gray-900"
            >
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
              onChange={handleSubmitChange}
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
