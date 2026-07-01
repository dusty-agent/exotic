import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function GET() {

  const result = await resend.emails.send({

    from:
      "EXOTIC ORDINARY <support@dustydraft.com>",

    replyTo:
      "soyoung@dustydraft.com",

    to:
      "theplaceyoung@gmail.com",

    subject:
      "Resend 테스트",

    html: `
      <h1>메일 테스트 성공 🎉</h1>

      <p>
        EXOTIC ORDINARY 메일 시스템이 정상적으로 동작합니다.
      </p>
    `,

  });

  console.log(result);

  return NextResponse.json(result);

}