import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: NextRequest
) {

  const body = await req.formData();

  console.log("APPROVE CALLED");

  console.log(
    Object.fromEntries(body.entries())
  );

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "theplaceyoung@gmail.com",

    subject:
      "New Order - Exotic Ordinary",

    html: `
      <h1>New Order</h1>
      <p>Order Received</p>
    `,
  });

  return NextResponse.redirect(
    new URL("/success", req.url)
  );
}