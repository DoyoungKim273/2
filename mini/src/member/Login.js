import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleidChange = (event) => {
    setid(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch(`http://${process.env.REACT_APP_APIKEY}/login`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id, password}),
      });
    if(response.ok){
      console.log("로그인 성공");
      alert("로그인에 성공하였습니다.")
      navigate(`/`)
    } else {
      console.log("로그인 실패");
      alert("로그인에 실패하였습니다.")
    }
  } catch (error){
    console.log("네트워크 오류", error.message)
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          🤱🏻 로그인 페이지 🤱🏻
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
                value={id}
                required
                onChange={handleidChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
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
                value={password}
                required
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-amber-100 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-800 shadow-sm hover:bg-amber-500"
              onClick={handleLogin}
            >
              로그인
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to="/BeMember"
            className="font-semibold leading-6 text-purple-950 hover:text-amber-700"
          >
            회원가입 바로가기
          </Link>
        </p>
      </div>
    </div>
  );
}
