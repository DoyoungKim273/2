import logo from "./logo.svg";
import weblogo from "./img/weblogo.webp";
import "./App.css";
import BMI from "./body/BMI";
import Slidemain from "./main/Slidemain";
import Noticemain from "./main/Noticemain";
import Intromain from "./main/Intromain";
import Linkmain from "./main/Linkmain"

function App() {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col ">
      <header className="h-24 bg-purple-500 flex">
        <div className="w-80 bg-white h-24 flex items-center">
          <img src={weblogo} alt="weblogo" className="h-24 w-24"></img>
          <div className="text-purple-950 text-2xl font-bold text-right">
            엄마랑 아이랑
          </div>
        </div>
        <nav className="w-10/12 float-right h-full flex justify-between">
          <ul>
            <li>
              <a href="#">임산부</a>
              <ul>
                <li>식단을 통한 영양 평가</li>
                <li>올바른 식사 지도</li>
                <li>바람직한 체중 계산</li>
              </ul>
            </li>
            <li>
              <a href="#">수유부</a>
              <ul>
                <li>식단을 통한 영양 평가</li>
                <li>올바른 식사 지도</li>
                <li>바람직한 체중 계산</li>
              </ul>
            </li>
            <li>
              <a href="#">영유아</a>
              <ul>
                <li>식단을 통한 영양 평가</li>
                <li>올바른 식사 지도</li>
                <li>바람직한 체중 계산</li>
              </ul>
            </li>
          </ul>
          <div className="flex space-x-4 px-20">
            <a
              href="#"
              className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
            >
              로그인
            </a>
            <a
              href="#"
              className="py-2 px-4 h-10 bg-purple-300 text-purple-950 rounded-3xl font-bold"
            >
              회원가입
            </a>
          </div>
        </nav>
      </header>
      <div className="h-72 bg-slate-400">
        <Slidemain />
      </div>
      <main className="h-52 bg-slate-500 float-left flex-grow flex ">
        <section className="flex-1 float-left h-full bg-purple-100">
          <Noticemain />
        </section>
        <section className="flex-1 float-left h-full bg-purple-100">
          <Intromain/>
        </section>
        <section className="flex-1 float-left h-full bg-purple-100">
          <Linkmain/>
        </section>
      </main>
      <footer className="h-20 w-full flex justify-between items-center bg-purple-500">
        <div className="h-full w-48"></div>
        <div className="h-full w-8/12 flex justify-center items-center text-base text-white">ⓒ 2024 MOJAMOJA - Doyoung Kim & Nayoung Lee. All right reserved.</div>
        <ul className="h-full w-48"></ul>
      </footer>
      <div className="text-sm text-center"> * 공지 : 본 페이지에서 제공되는 정보는 의학적 소견과 상이할 수 있으니 어디까지나 참고로 이용하시기 바랍니다. *</div>
    </div>
  );
}

export default App;
