import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function GET(
  req: NextRequest
) {

  const searchParams =
    req.nextUrl.searchParams;

  console.log(
    Object.fromEntries(
      searchParams.entries()
    )
  );

  await resend.emails.send({
    from: "orders@your-domain.com",
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