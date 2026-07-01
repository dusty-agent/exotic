import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: imagePath } = await params;

  // 1. 경로 탐색 공격 방지
  if (
    imagePath.some(
      (segment) =>
        segment.includes("..") ||
        segment.includes("\\")
    )
  ) {
    return new Response("Forbidden", {
      status: 403,
    });
  }

  // 2. 실제 파일 위치
  const filePath = path.join(
    process.cwd(),
    "private",
    "moodArchive",
    ...imagePath
  );

  // 3. 파일 존재 여부
  if (!fs.existsSync(filePath)) {
    return new Response("Not Found", {
      status: 404,
    });
  }

  // 4. 허용할 확장자만
  const ext = path.extname(filePath).toLowerCase();

  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
  };

  if (!mimeTypes[ext]) {
    return new Response("Forbidden", {
      status: 403,
    });
  }

  // 5. Hotlink 방지 (운영 환경에서만)
  const referer = request.headers.get("referer");

  if (process.env.NODE_ENV === "production" && referer) {
    const allowed =
      referer.startsWith("https://exoticordinary.com") ||
      referer.startsWith("https://www.exoticordinary.com");
  
    if (!allowed) {
      return new Response("Forbidden", {
        status: 403,
      });
    }
  }

  // 6. 파일 읽기
  const buffer = fs.readFileSync(filePath);

  return new Response(buffer, {
    headers: {
      "Content-Type": mimeTypes[ext],

      // 브라우저에서 열기
      "Content-Disposition": "inline",

      // MIME 스니핑 방지
      "X-Content-Type-Options": "nosniff",

      // 캐시
      "Cache-Control":
        "public, max-age=31536000, immutable",
    },
  });
}