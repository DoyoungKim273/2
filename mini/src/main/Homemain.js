import Noticemain from "./Noticemain";
import Intromain from "./Intromain";
import Linkmain from "./Linkmain";
import Slidemain from "./Slidemain";
export default function Homemain() {
  return (
    <>
      <div className="h-64 bg-slate-400">
        <Slidemain />
      </div>
      <main className="h-52 bg-slate-500 float-left flex-grow flex ">
        <section className="flex-1 float-left h-full bg-purple-100">
          <Noticemain />
        </section>
        <section className="flex-1 float-left h-full bg-purple-100">
          <Intromain />
        </section>
        <section className="flex-1 float-left h-full bg-purple-100">
          <Linkmain />
        </section>
      </main>
    </>
  );
}
