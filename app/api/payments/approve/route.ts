import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

console.log("APPROVE VERSION 2026-07-12");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: NextRequest
) {

  const body =
    await req.formData();

  console.log("APPROVE CALLED");

  console.log(
    Object.fromEntries(body.entries())
  );

  const orderId =
    body.get("orderId")?.toString()
    || `EO-${Date.now()}`;

    const reserved =
    body.get("mallReserved")?.toString();
  
    const reservedData =
      reserved ? JSON.parse(reserved) : {};

      const products =
      reservedData.products ?? [];
    
      const digitalProduct =
      products.find(
        (p: any) => p.category === "Mood Archive"
      );
    
    const slug =
      digitalProduct?.slug ?? "";
    
    const buyerName =
      reservedData.buyerName ?? "";
    
    const buyerEmail =
      reservedData.buyerEmail ?? "";
    
    const buyerTel =
      reservedData.buyerTel ?? "";
    
    const zipcode =
      reservedData.zipcode ?? "";
    
    const address =
      reservedData.address ?? "";
    
    const detailAddress =
      reservedData.detailAddress ?? "";
    
    const memo =
      reservedData.memo ?? "";
    
    const newsletter =
      reservedData.newsletter ?? false;
    
    const hasDigital =
      products.some(
        (p: any) => p.category === "Mood Archive"
      );
    
    const hasPhysical =
      products.some(
        (p: any) => p.category !== "Mood Archive"
      );
    
    const email =
      buyerEmail;
    
    const productName =
      body.get("goodsName")?.toString()
      || "Mood Archive";

    const amount =
      body.get("amount")?.toString()
      || "-";

  console.log(reservedData);


  try {

    if (hasDigital) {
      // ===========================
      // 디지털 관리자 메일
      // ===========================

      await resend.emails.send({

        from:
          "EXOTIC ORDINARY <support@exoticordinary.com>",

        to:
          "support@exoticordinary.com",

        replyTo:
          email,

        subject:
          `📦 [NEW DIGITAL ORDER] ${productName} • ${orderId}`,

        html: `

        <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">

        <div style="max-width:700px;margin:auto;background:#fff;border-radius:16px;padding:42px;">

        <div style="font-size:13px;letter-spacing:3px;color:#999;">
        EXOTIC ORDINARY®
        </div>

        <h1 style="margin-top:18px;">
        📦 New Digital Order
        </h1>

        <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">

        <table style="width:100%;line-height:2;font-size:15px;">

        <tr>

        <td style="color:#777;width:170px;">
        주문번호
        </td>

        <td>
        <strong>${orderId}</strong>
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        이메일
        </td>

        <td>
        ${email}
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        상품
        </td>

        <td>
        ${productName}
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        결제금액
        </td>

        <td>
        ${amount} KRW
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        다운로드
        </td>

        <td>
        결제일로부터 3개월
        </td>

        </tr>

        </table>

        <div style="margin-top:40px;">

        <a
        href="mailto:${email}"
        style="
        display:inline-block;
        background:#111;
        color:#fff;
        text-decoration:none;
        padding:14px 24px;
        border-radius:999px;
        ">

        고객에게 메일 보내기

        </a>

        </div>

        </div>

        </div>

        `,

      });

      // ===========================
      //  디지털 고객 메일
      // ===========================
      await resend.emails.send({

        from:
          "EXOTIC ORDINARY <support@exoticordinary.com>",

        to:
          email,

        replyTo:
          "support@exoticordinary.com",

        subject:
          `✨ 주문이 완료되었습니다. (${orderId})`,

        html: `

        <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">

        <div style="max-width:620px;margin:0 auto;background:#fff;border-radius:16px;padding:48px;">

        <div style="text-align:center;">

        <div style="font-size:13px;letter-spacing:4px;color:#999;">
        EXOTIC ORDINARY®
        </div>

        <h1 style="margin:16px 0 10px;font-size:34px;font-weight:500;">
        Thank You
        </h1>

        <p style="color:#777;">
        Mood Archive
        </p>

        </div>

        <hr style="margin:40px 0;border:none;border-top:1px solid #eee;">

        <h2 style="font-size:28px;">
        주문이 완료되었습니다.
        </h2>

        <p style="line-height:1.9;font-size:16px;">

        구매해주셔서 감사합니다.

        <br/>

        결제가 정상적으로 완료되었습니다.

        </p>

        <div
        style="
        margin:40px 0;
        padding:26px;
        background:#fafafa;
        border-radius:14px;
        ">

        <table
        style="
        width:100%;
        line-height:2;
        font-size:15px;
        ">

        <tr>

        <td style="color:#777;">
        주문번호
        </td>

        <td>
        ${orderId}
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        상품
        </td>

        <td>
        ${productName}
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        결제금액
        </td>

        <td>
        ${amount} KRW
        </td>

        </tr>

        <tr>

        <td style="color:#777;">
        다운로드
        </td>

        <td>
        결제일로부터 3개월
        </td>

        </tr>

        </table>

        </div>

        <div style="text-align:center;">

        <a

        href="https://exoticordinary.com/api/download/${slug}"

        style="
        display:inline-block;
        padding:16px 34px;
        background:#111;
        color:#fff;
        text-decoration:none;
        border-radius:999px;
        ">

        Download ZIP

        </a>

        </div>

        <div
        style="
        margin-top:45px;
        padding:22px;
        background:#f8f6f2;
        border-radius:14px;
        ">

        <strong>안내사항</strong>

        <ul
        style="
        margin-top:16px;
        padding-left:20px;
        line-height:2;
        ">

        <li>
        다운로드는 결제일 기준 3개월 가능합니다.
        </li>

        <li>
        개인 라이선스 상품입니다.
        </li>

        <li>
        재배포 및 재판매는 허용되지 않습니다.
        </li>

        <li>
        문제가 있으시면 언제든 문의해주세요.
        </li>

        </ul>

        </div>

        <div
        style="
        margin-top:50px;
        text-align:center;
        font-size:13px;
        color:#888;
        line-height:2;
        ">

        Need Help?

        <br/>

        <a
        href="mailto:support@exoticordinary.com"
        style="
        color:#777;
        text-decoration:none;
        ">

        support@exoticordinary.com

        </a>

        <br/><br/>

        https://exoticordinary.com

        </div>

        </div>

        </div>

        `,

      });

    } if(hasPhysical) {

      // ===========================
      // 배송 관리자 메일
      // ===========================
  
      await resend.emails.send({

        from:
          "EXOTIC ORDINARY <support@exoticordinary.com>",
      
        to:
          "support@exoticordinary.com",
      
        replyTo:
          email,
      
        subject:
          `📦 [NEW ORDER] ${productName} • ${orderId}`,
      
        html: `
      
        <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">
      
          <div style="max-width:720px;margin:auto;background:#fff;border-radius:16px;padding:42px;">
      
            <div style="font-size:13px;letter-spacing:3px;color:#999;">
              EXOTIC ORDINARY®
            </div>
      
            <h1 style="margin-top:18px;">
              📦 New Physical Order
            </h1>
      
            <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">
      
            <table style="width:100%;line-height:2;font-size:15px;">
      
              <tr>
                <td style="color:#777;width:180px;">주문번호</td>
                <td><strong>${orderId}</strong></td>
              </tr>
      
              <tr>
                <td style="color:#777;">상품</td>
                <td>${productName}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">결제금액</td>
                <td>${amount} KRW</td>
              </tr>
      
            </table>
      
            <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">
      
            <h3>주문자 정보</h3>
      
            <table style="width:100%;line-height:2;font-size:15px;">
      
              <tr>
                <td style="color:#777;width:180px;">이름</td>
                <td>${buyerName}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">이메일</td>
                <td>${email}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">전화번호</td>
                <td>${buyerTel}</td>
              </tr>
      
            </table>
      
            <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">
      
            <h3>배송지 정보</h3>
      
            <table style="width:100%;line-height:2;font-size:15px;">
      
              <tr>
                <td style="color:#777;width:180px;">우편번호</td>
                <td>${zipcode}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">주소</td>
                <td>${address}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">상세주소</td>
                <td>${detailAddress}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">배송메모</td>
                <td>${memo || "-"}</td>
              </tr>
      
              <tr>
                <td style="color:#777;">뉴스레터</td>
                <td>${newsletter ? "동의" : "미동의"}</td>
              </tr>
      
            </table>
      
          </div>
      
        </div>
      
        `,
      
      });
  
      // ===========================
      // 배송 고객 메일
      // ===========================
  
      await resend.emails.send({

        from:
          "EXOTIC ORDINARY <support@exoticordinary.com>",
      
        to:
          email,
      
        replyTo:
          "support@exoticordinary.com",
      
        subject:
          `✨ 주문이 접수되었습니다. (${orderId})`,
      
        html: `
      
        <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">
      
          <div style="max-width:620px;margin:auto;background:#fff;border-radius:16px;padding:48px;">
      
            <div style="text-align:center;">
      
              <div style="font-size:13px;letter-spacing:4px;color:#999;">
                EXOTIC ORDINARY®
              </div>
      
              <h1 style="margin:16px 0 10px;font-size:34px;font-weight:500;">
                Thank You
              </h1>
      
              <p style="color:#777;">
                Your order has been received.
              </p>
      
            </div>
      
            <hr style="margin:40px 0;border:none;border-top:1px solid #eee;">
      
            <h2 style="font-size:28px;">
              주문이 정상적으로 접수되었습니다.
            </h2>
      
            <p style="line-height:1.9;font-size:16px;">
      
              EXOTIC ORDINARY를 선택해주셔서 감사합니다.
      
              <br/><br/>
      
              주문을 확인한 후
              영업일 기준 1~2일 내 제작 및 배송을 준비합니다.
      
              <br/><br/>
      
              배송이 시작되면
              운송장 번호를 이메일로 안내드립니다.
      
            </p>
      
            <div
            style="
            margin:40px 0;
            padding:26px;
            background:#fafafa;
            border-radius:14px;
            ">
      
            <table
            style="
            width:100%;
            line-height:2;
            font-size:15px;
            ">
      
            <tr>
      
            <td style="color:#777;">
            주문번호
            </td>
      
            <td>
            ${orderId}
            </td>
      
            </tr>
      
            <tr>
      
            <td style="color:#777;">
            상품
            </td>
      
            <td>
            ${productName}
            </td>
      
            </tr>
      
            <tr>
      
            <td style="color:#777;">
            결제금액
            </td>
      
            <td>
            ${amount} KRW
            </td>
      
            </tr>
      
            </table>
      
            </div>
      
            <div
            style="
            margin-top:40px;
            padding:24px;
            background:#f8f6f2;
            border-radius:14px;
            ">
      
            <strong>배송 안내</strong>
      
            <ul
            style="
            margin-top:16px;
            padding-left:20px;
            line-height:2;
            ">
      
            <li>
            주문 확인 후 순차적으로 제작 및 배송됩니다.
            </li>
      
            <li>
            배송이 시작되면 운송장 번호를 이메일로 보내드립니다.
            </li>
      
            <li>
            배송 관련 문의는 support@exoticordinary.com 으로 연락해주세요.
            </li>
      
            </ul>
      
            </div>
      
            <div
            style="
            margin-top:50px;
            text-align:center;
            font-size:13px;
            color:#888;
            line-height:2;
            ">
      
            Need Help?
      
            <br/>
      
            <a
            href="mailto:support@exoticordinary.com"
            style="
            color:#777;
            text-decoration:none;
            ">
      
            support@exoticordinary.com
      
            </a>
      
            <br/><br/>
      
            https://exoticordinary.com
      
            </div>
      
          </div>
      
        </div>
      
        `,
      
      });
  
    }

  } catch (error) {

    console.error("MAIL ERROR");

    console.error(error);

  }

  return NextResponse.redirect(
    new URL("/success", req.url),
    303
  );

}

