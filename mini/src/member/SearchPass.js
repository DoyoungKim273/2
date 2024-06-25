import React from "react";
import { Link } from "react-router-dom";

export default function SearchId() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-950">
          🔍 임시 비밀번호 발급 페이지 🔍
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label for="id" className="block text-center font-bold leading-6 text-gray-900">
              아이디를 입력해주세요
            </label>
            <div className="mt-3 mb-5">
              <input
                id="id"
                name="id"
                type="id"
                // value={userId}
                required
                // onChange={handleUserIdChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
            <label for="id" className="block text-center font-bold leading-6 text-gray-900">
              회원가입 시 기입한 전화번호를 입력해주세요
            </label>
            <div className="mt-3">
              <input
                id="id"
                name="id"
                type="id"
                // value={userId}
                required
                // onChange={handleUserIdChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              ></input>
            </div>
            
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-amber-100 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-800 shadow-sm hover:bg-amber-500"
            //   onClick={handleLogin}
            >
              임시 비밀번호 발급
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
