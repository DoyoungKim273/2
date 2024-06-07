// 수정
import logo from "./logo.svg";
import weblogo from "./img/weblogo.png";
import "./App.css";
import BMI from "./body/BMI";
import NutriCal from "./nutri/NutriCal";
import Noticemain from "./main/Noticemain";
import Intromain from "./main/Intromain";
import Linkmain from "./main/Linkmain";
import NutriDetail from "./nutri/NutriDetail";

import Homemain from "./main/Homemain";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./member/Login";
import GuideList from "./guide/GuideList";
import BeMember from "./member/BeMember";
import MyPage from "./member/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full mx-auto min-h-screen flex flex-col ">
        <header className="h-24 bg-purple-500 flex my-5">
          <Link to="/">
            <div className="w-80 bg-white h-24 flex items-center">
              <img src={weblogo} alt="weblogo" className="mx-3 h-20 w-20"></img>
              <div className="text-purple-950 text-3xl font-bold text-right">
                엄마랑 아이랑
              </div>
            </div>
          </Link>
          <nav className="w-10/12 float-right h-full flex justify-between">
            <ul>
              <li>
                <Link to="#"> ▸ 임산부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>
                    <Link to="/GuideList">올바른 식사 지도</Link>
                  </li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#"> ▸ 수유부</Link>
                <ul>
                  <li>
                    <Link to="/NutriCal">식단을 통한 영양 평가</Link>
                  </li>
                  <li>
                    <Link to="/GuideList">올바른 식사 지도</Link>
                  </li>
                  <li>
                    <Link to="/BMI">바람직한 체중 계산</Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="flex space-x-4 px-20">
              <Link
                to="/Login"
                className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
              >
                로그인
              </Link>
              <Link
                to="/MyPage"
                className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
              >
                마이페이지
              </Link>
              <Link
                to="/BeMember"
                className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
              >
                회원가입
              </Link>
            </div>
          </nav>
        </header>

        <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/BMI" element={<BMI />} />
          <Route path="/NutriCal" element={<NutriCal />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/NutriDetail" element={<NutriDetail />} />
          <Route path="/GuideList" element={<GuideList />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/BeMember" element={<BeMember/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
        </Routes>
        </div>
        

        <footer className="h-16 w-full flex flex-col justify-between items-center fixed bottom-0 bg-purple-500">
          <div className="w-full h-2/3 flex justify-center items-center text-base text-white">
            ⓒ 2024 MOJAMOJA - Doyoung Kim & Nayoung Lee. All right reserved.
          </div>
          <div className="text-sm text-center w-full bg-white">
          * 공지 : 본 페이지에서 제공되는 정보는 의학적 소견과 상이할 수 있으니
          어디까지나 참고로 이용하시기 바랍니다. *
        </div>
        </footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
