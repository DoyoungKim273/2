import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto">
      <header className="flex justify-between items-center h-20 p-10 text-xl font-bold text-black bg-slate-200">
      <div>미니 프로젝트 시작</div>
      </header>
      <main className="grow flex flex-col justify-center items-center"></main>
      <footer className="flex justify-center items-center h-20 bg-slate-800 text-base text-white">
        ⓒ 2024 Doyoung Kim. All right reserved.
      </footer>
    </div>
  );
}

export default App;
