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

  try {

    const result = await resend.emails.send({

      from:
        "EXOTIC ORDINARY <support@dustydraft.com>",
      
      replyTo:
        "soyoung@dustydraft.com",

      to: email,

      subject:
        "주문이 완료되었습니다. | Order Confirmation",

      html: `

      <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;padding:40px;line-height:1.7;color:#333;">

        <p style="letter-spacing:3px;font-size:12px;color:#999;">
          EXOTIC ORDINARY®
        </p>

        <h1 style="font-weight:300;">
          감사합니다.
        </h1>

        <p>

          주문이 정상적으로 완료되었습니다.

          <br/>

          Thank you for your purchase.

        </p>

        <hr style="margin:40px 0;border:none;border-top:1px solid #eee;">

        <p>

          <strong>주문번호</strong><br/>

          ${orderId}

        </p>

        <p>

          디지털 상품은
          <strong>결제일로부터 3개월</strong>
          동안 다운로드 가능합니다.

        </p>

        <p>

          Digital downloads remain available
          for <strong>3 months</strong>
          from the payment date.

        </p>

        <div style="margin-top:50px;">

          <a
            href="https://exoticordinary.com/success"
            style="
            background:#111;
            color:white;
            text-decoration:none;
            padding:16px 28px;
            border-radius:999px;
            display:inline-block;
            "
          >

            주문 확인하기
            (View Order)

          </a>

        </div>

        <p style="margin-top:60px;color:#999;font-size:13px;">

          Need Help?

          <br/>

          support@dustydraft.com

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