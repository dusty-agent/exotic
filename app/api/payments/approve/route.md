import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

  const email =
    body.get("buyerEmail")?.toString()
    || "theplaceyoung@gmail.com";

  const orderId =
    body.get("orderId")?.toString()
    || `EO-${Date.now()}`;

  const reserved =
    body.get("mallReserved")?.toString();

  const slug =
    reserved
      ? JSON.parse(reserved).slug
      : "white-musk";

  try {

    const result = await resend.emails.send({

      from:
        "EXOTIC ORDINARY <support@exoticordinary.com>",

      replyTo:
        "support@exoticordinary.com",

      to: email,

      subject:
        "주문이 완료되었습니다. | Order Confirmation",

        html: `

          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;padding:48px;line-height:1.8;color:#333;">
          
            <p style="letter-spacing:4px;font-size:12px;color:#999;">
              EXOTIC ORDINARY®
            </p>
          
            <h1 style="font-weight:300;margin-top:20px;">
              결제가 완료되었습니다.
            </h1>
          
            <p>
          
              감사합니다.
          
              <br/>
          
              주문이 정상적으로 접수되었습니다.
          
            </p>
          
            <p style="color:#888;">
          
              Payment completed successfully.
          
              <br/>
          
              Thank you for your purchase.
          
            </p>
          
            <hr style="margin:40px 0;border:none;border-top:1px solid #eee;">
          
            <p>
          
              <strong>주문번호</strong>
          
              <br/>
          
              ${orderId}
          
            </p>
          
            <p>
          
              <strong>다운로드 가능 기간</strong>
          
              <br/>
          
              결제일로부터 3개월
          
              <br/>
          
              <span style="color:#888;">
                Available for 3 months from the payment date.
              </span>
          
            </p>
          
            <div style="margin-top:50px;">
          
              <a
          
                href="https://exoticordinary.com/api/download/${slug}"
                style="
                background:#111;
                color:white;
                text-decoration:none;
                padding:16px 30px;
                border-radius:999px;
                display:inline-block;
                "
          
              >
          
                주문 확인 / 다운로드
          
              </a>
          
            </div>
          
            <p style="margin-top:60px;font-size:13px;color:#777;">
          
              다운로드 링크는 주문 완료 페이지에서도 확인하실 수 있습니다.
          
              <br/><br/>
          
              Need Help?
          
              <br/>
          
              support@exoticordinary.com
          
            </p>
          
          </div>
          
          `,

    });

    console.log(result);

  } catch (error) {

    console.error(error);

  }

  return NextResponse.redirect(
    new URL("/success", req.url)
  );

}