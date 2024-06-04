import logo from "./logo.svg";
import weblogo from "./img/weblogo.webp";
import "./App.css";
import BMI from "./body/BMI";
import NutriCal from "./nutri/NutriCal";
import Noticemain from "./main/Noticemain";
import Intromain from "./main/Intromain";
import Linkmain from "./main/Linkmain";

import Homemain from "./main/Homemain";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full mx-auto min-h-screen flex flex-col ">
        <header className="h-24 bg-purple-500 flex my-5">
          <div className="w-80 bg-white h-24 flex items-center">
            <img src={weblogo} alt="weblogo" className="h-24 w-24"></img>
            <div className="text-purple-950 text-2xl font-bold text-right">
              엄마랑 아이랑
            </div>
          </div>
          <nav className="w-10/12 float-right h-full flex justify-between">
            <ul>
              <li>
                <Link to="#">임산부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>올바른 식사 지도</li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">수유부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>올바른 식사 지도</li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">영유아</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>올바른 식사 지도</li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex space-x-4 px-20">
              <Link
                to="#"
                className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
              >
                로그인
              </Link>
              <Link
                to="#"
                className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
              >
                회원가입
              </Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/BMI" element={<BMI />} />
          <Route path="/NutriCal" element={<NutriCal />} />
        </Routes>

        <footer className="h-16 w-full flex justify-between items-center bg-purple-500">
          <div className="h-full w-48"></div>
          <div className="h-full w-8/12 flex justify-center items-center text-base text-white">
            ⓒ 2024 MOJAMOJA - Doyoung Kim & Nayoung Lee. All right reserved.
          </div>
          <ul className="h-full w-48"></ul>
        </footer>
        <div className="text-sm text-center">
          * 공지 : 본 페이지에서 제공되는 정보는 의학적 소견과 상이할 수 있으니
          어디까지나 참고로 이용하시기 바랍니다. *
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
