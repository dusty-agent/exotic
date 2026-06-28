export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-semibold text-[#1F1F1F]">
        개인정보처리방침
      </h1>

      <div className="mt-12 space-y-10 leading-8 text-[#6E625B]">

        <section>
          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            1. 개인정보의 수집 항목
          </h2>

          <p>
            드래프트(이하 "회사")는
            EXOTIC ORDINARY® 쇼핑몰 운영을 위해
            다음과 같은 개인정보를 처리합니다.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>이름</li>
            <li>이메일 주소</li>
            <li>휴대전화번호</li>
            <li>배송지 주소(실물상품 주문 시)</li>
            <li>주문 및 결제정보</li>
          </ul>

          <p className="mt-4">
            결제에 필요한 카드번호, 계좌번호 등의 금융정보는
            NICEPAY(나이스페이)를 통해 안전하게 처리되며,
            드래프트(draft)는 해당 정보를 저장하거나 보관하지 않습니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            2. 개인정보의 수집 및 이용 목적
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>상품 주문 및 배송</li>
            <li>디지털 콘텐츠 제공</li>
            <li>결제 확인</li>
            <li>고객 문의 응대</li>
            <li>법령에서 정한 의무 이행</li>
          </ul>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            3. 개인정보의 보유 및 이용기간
          </h2>

          <p>
            회사는 관계 법령에서 정한 기간 동안 개인정보를 보관하며,
            보관기간이 종료되면 지체 없이 안전하게 파기합니다.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>계약 또는 청약철회 기록 : 5년</li>
            <li>결제 및 재화 공급 기록 : 5년</li>
            <li>소비자 불만 및 분쟁처리 기록 : 3년</li>
          </ul>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            4. 개인정보의 제3자 제공
          </h2>

          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 법령에 근거하거나 이용자의 동의가 있는 경우에 한하여 제공될 수 있습니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            5. 개인정보 처리의 위탁
          </h2>

          <p>
            원활한 서비스 제공을 위하여 다음과 같이 개인정보 처리를 위탁할 수 있습니다.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>결제대행 : NICEPAY(나이스페이)</li>
            <li>택배 배송 : 배송 계약 택배사</li>
            <li>이메일 발송 : 회사가 지정한 이메일 서비스</li>
          </ul>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            6. 이용자의 권리
          </h2>

          <p>
            이용자는 언제든지 자신의 개인정보에 대한
            열람, 정정, 삭제 및 처리정지를 요청할 수 있으며,
            회사는 관련 법령에 따라 이를 처리합니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            7. 개인정보의 파기
          </h2>

          <p>
            개인정보의 보유기간이 종료되거나 처리 목적이 달성된 경우
            회사는 관련 법령에 따라 해당 정보를 안전하게 파기합니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            8. 개인정보 보호책임자
          </h2>

          <p>
            성명 : 장소영
          </p>

          <p>
            이메일 : exoticordinary@gmail.com
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-3">
            9. 개인정보처리방침의 변경
          </h2>

          <p>
            본 개인정보처리방침은 관련 법령 및 회사 정책의 변경에 따라
            수정될 수 있으며, 변경 시 홈페이지를 통해 공지합니다.
          </p>

        </section>

        <section className="pt-10 border-t border-[#D8CCC5]">

          <p>
            시행일 : 2026년 6월 1일
          </p>

        </section>

      </div>
    </main>
  );
}