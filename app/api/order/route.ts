import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      customerName,
      customerPhone,
      customerEmail,
      type,
      metal,
      stone,
      band,
      size,
      chainStyle,
      chainLength,
      earringStyle,
      postMaterial,
      orderSheet,
    } = body;

    const orderId = `EO-${new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "")}-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;

    // 관리자 메일
    const admin = await resend.emails.send({
        from: "Exotic Ordinary Studio <studio@exoticordinary.com>",
        to: "studio@exoticordinary.com",
        replyTo: customerEmail,
        subject: `💎 [NEW ORDER] ${customerName} • ${type} • ${orderId}`,
        html: `
                <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">
                
                <div style="max-width:720px;margin:0 auto;background:#fff;border-radius:16px;padding:42px;box-shadow:0 10px 30px rgba(0,0,0,.06);">
                
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;">
                
                <div>
                
                <div style="font-size:13px;letter-spacing:3px;color:#888;">
                EXOTIC ORDINARY®
                </div>
                
                <h1 style="margin:10px 0 0;font-size:30px;">
                💎 New Order
                </h1>
                
                </div>
                
                <div style="text-align:right;font-size:14px;color:#777;">
                ${orderId}<br>
                ${new Date().toLocaleString("ko-KR")}
                </div>
                
                </div>
                
                <hr style="border:none;border-top:1px solid #eee;margin:30px 0;">
                
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                
                <div style="padding:22px;background:#fafafa;border-radius:12px;">
                
                <h3 style="margin-top:0;">
                👤 고객 정보
                </h3>
                
                <table style="width:100%;font-size:15px;line-height:2;">
                
                <tr>
                <td style="color:#777;">이름</td>
                <td><strong>${customerName}</strong></td>
                </tr>
                
                <tr>
                <td style="color:#777;">연락처</td>
                <td>${customerPhone}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">이메일</td>
                <td>
                <a href="mailto:${customerEmail}">
                ${customerEmail}
                </a>
                </td>
                </tr>
                
                </table>
                
                </div>
                
                <div style="padding:22px;background:#fafafa;border-radius:12px;">
                
                <h3 style="margin-top:0;">
                💍 주문 정보
                </h3>
                
                <table style="width:100%;font-size:15px;line-height:2;">
                
                <tr>
                <td style="color:#777;">Jewelry</td>
                <td>${type}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">Metal</td>
                <td>${metal}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">Stone</td>
                <td>${stone}</td>
                </tr>
                
                ${
                type === "Ring"
                ? `
                <tr>
                <td style="color:#777;">Band</td>
                <td>${band}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">Size</td>
                <td>${size}</td>
                </tr>
                `
                : ""
                }
                
                ${
                type === "Necklace"
                ? `
                <tr>
                <td style="color:#777;">Chain</td>
                <td>${chainStyle}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">Length</td>
                <td>${chainLength}</td>
                </tr>
                `
                : ""
                }
                
                ${
                type === "Earrings"
                ? `
                <tr>
                <td style="color:#777;">Style</td>
                <td>${earringStyle}</td>
                </tr>
                
                <tr>
                <td style="color:#777;">Post</td>
                <td>${postMaterial}</td>
                </tr>
                `
                : ""
                }
                
                </table>
                
                </div>
                
                </div>
                
                <div style="margin-top:30px;padding:24px;background:#111;color:#fff;border-radius:14px;">
                
                <div style="font-size:13px;letter-spacing:2px;color:#bbb;margin-bottom:16px;">
                ORDER SHEET
                </div>
                
                <pre style="white-space:pre-wrap;font-family:Menlo,Consolas,monospace;font-size:14px;line-height:1.6;color:#fff;margin:0;">
                ${orderSheet}
                </pre>
                
                </div>
                
                <div style="margin-top:36px;text-align:center;">
                
                <a href="mailto:${customerEmail}"
                style="display:inline-block;padding:14px 26px;background:#111;color:#fff;text-decoration:none;border-radius:999px;margin-right:10px;">
                고객에게 메일 보내기
                </a>
                
                <a href="tel:${customerPhone}"
                style="display:inline-block;padding:14px 26px;background:#ddd;color:#111;text-decoration:none;border-radius:999px;">
                전화하기
                </a>
                
                </div>
                
                <hr style="margin:40px 0;border:none;border-top:1px solid #eee;">
                
                <div style="text-align:center;color:#999;font-size:13px;">
                Generated automatically by Exotic Ordinary Studio
                </div>
                
                </div>
                
                </div>
                `,
      });

    // 고객 메일
    const customer = await resend.emails.send({
    from: "Exotic Ordinary Studio <studio@exoticordinary.com>",
    to: customerEmail,
    replyTo: "studio@exoticordinary.com",
    subject: `✨ 주문이 정상적으로 접수되었습니다. (${orderId})`,
    html: `
            <div style="background:#f5f3ef;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;">

            <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:16px;padding:48px;box-shadow:0 10px 30px rgba(0,0,0,.06);">

                <div style="text-align:center;margin-bottom:40px;">

                <div style="font-size:13px;letter-spacing:4px;color:#999;">
                    EXOTIC ORDINARY®
                </div>

                <h1 style="margin:14px 0 8px;font-size:34px;font-weight:500;">
                    Thank You
                </h1>

                <p style="margin:0;color:#777;font-size:15px;">
                    Beauty in the Mirror.
                </p>

                </div>

                <hr style="border:none;border-top:1px solid #eee;margin:36px 0;">

                <h2 style="font-size:24px;margin-bottom:24px;">
                주문이 정상적으로 접수되었습니다.
                </h2>

                <p style="font-size:16px;line-height:1.8;">
                안녕하세요,
                <strong>${customerName}</strong>님.
                </p>

                <p style="font-size:16px;line-height:1.8;">
                Exotic Ordinary Studio에 제작 문의를 남겨주셔서 감사합니다.
                </p>

                <p style="font-size:16px;line-height:1.8;">
                디자이너가 주문 내용을 확인한 후
                <strong>영업일 기준 1~2일</strong> 내 연락드리겠습니다.
                </p>

                <div style="margin:40px 0;padding:24px;background:#fafafa;border:1px solid #ececec;border-radius:12px;">

                <div style="font-size:13px;color:#888;margin-bottom:18px;letter-spacing:1px;">
                    ORDER INFORMATION
                </div>

                <table style="width:100%;border-collapse:collapse;font-size:15px;">

                    <tr>
                    <td style="padding:8px 0;color:#777;width:120px;">주문번호</td>
                    <td><strong>${orderId}</strong></td>
                    </tr>

                    <tr>
                    <td style="padding:8px 0;color:#777;">이름</td>
                    <td>${customerName}</td>
                    </tr>

                    <tr>
                    <td style="padding:8px 0;color:#777;">이메일</td>
                    <td>${customerEmail}</td>
                    </tr>

                    <tr>
                    <td style="padding:8px 0;color:#777;">주얼리</td>
                    <td>${type}</td>
                    </tr>

                </table>

                </div>

                <div style="padding:22px;background:#f8f6f2;border-radius:12px;">

                <strong>안내사항</strong>

                <ul style="margin-top:14px;padding-left:18px;line-height:1.9;">

                    <li>디자이너가 주문 내용을 확인한 후 연락드립니다.</li>

                    <li>추가 상담이 필요한 경우 이메일 또는 연락처로 안내드립니다.</li>

                    <li>주문 내용 변경은 회신 또는 카카오톡으로 문의해주세요.</li>

                </ul>

                </div>

                <div style="margin-top:48px;text-align:center;">

                <a href="https://exoticordinary.com"
                    style="display:inline-block;padding:14px 28px;background:#111;color:#fff;text-decoration:none;border-radius:999px;font-size:14px;">
                    Visit Exotic Ordinary
                </a>

                </div>

                <hr style="border:none;border-top:1px solid #eee;margin:42px 0;">

                <div style="text-align:center;color:#999;font-size:13px;line-height:1.8;">

                <strong style="color:#222;">
                    Exotic Ordinary Studio
                </strong>

                <br>

                Beauty in the Mirror.

                <br><br>

                <a href="https://exoticordinary.com"
                    style="color:#777;text-decoration:none;">
                    exoticordinary.com
                </a>

                <br>

                reply :
                <a href="mailto:studio@exoticordinary.com"
                    style="color:#777;text-decoration:none;">
                    studio@exoticordinary.com
                </a>

                </div>

            </div>

            </div>
            `,
            });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error("RESEND ERROR");

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}