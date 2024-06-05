import Noticemain from "./Noticemain";
import Intromain from "./Intromain";
import Linkmain from "./Linkmain";
import Slidemain from "./Slidemain";
export default function Homemain() {
  return (
    <>
      <div className="h-64 my-3">
        <Slidemain />
      </div>
      <main className="h-52 float-left flex-grow flex ">
        <section className="flex-1 float-left h-full">
          <Noticemain />
        </section>
        <section className="flex-1 float-left h-full">
          <Intromain />
        </section>
        <section className="flex-1 float-left h-full">
          <Linkmain />
        </section>
      </main>
    </>
  );
}
