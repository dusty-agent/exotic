import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "private",
    "downloads",
    `${slug}.zip`
  );

  if (!fs.existsSync(filePath)) {
    return new Response("Not Found", {
      status:404
    });
  }

  const buffer = fs.readFileSync(filePath);

  return new Response(buffer,{
    headers:{
      "Content-Type":"application/zip",

      "Content-Disposition":
      `attachment; filename="${slug}.zip"`
    }
  });

}