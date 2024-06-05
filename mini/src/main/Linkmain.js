import React from "react";

export default function Noticemain() {
  return (
    <div>
      <section>
        <div className="bg-purple-400 h-14">
            <div className="px-7 py-3 text-white font-bold text-lg"> 🤍 모자건강 지원 사이트 바로가기</div>
        </div>
        <ul>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <a href="https://www.childcare.go.kr/?menuno=1" className="font-bold text-lg"> 💜 임신육아종합포털 아이사랑</a>
            <div>
              보건복지부와 한국사회보장정보원이 함께하는 임신, 출산, 육아 지원 포털 
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <a href="https://www.ksog.org/"  className="font-bold text-lg"> 💜 대한산부인과학회</a>
            <div>
              임신, 출산 관련 의학 전문 정보를 얻을 수 있는 대한신부인과학회 공식 사이트
            </div>
          </li>
          <li className="m-5 p-5 bg-purple-100 rounded-2xl">
            <a href="https://www.socialservice.or.kr:444/user/htmlEditor/view2.do?p_sn=13"  className="font-bold text-lg"> 💜 사회서비스 전자바우처</a>
            <div>
              임신출산 진료비 지원, 기저귀/조제분유 지원, 아이돌봄 지원 사업 등을 안내
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
