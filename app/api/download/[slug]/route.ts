import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const files: Record<string, string> = {
    "white-musk": "EO_MoodArchive_WhiteMusk.zip",
    "aqua-veil": "EO_MoodArchive_AquaVeil.zip",
    "blush-peony": "EO_MoodArchive_BlushPeony.zip",
    "greenery-mist": "EO_MoodArchive_GreeneryMist.zip",
    "original-collection": "EO_MoodArchive_OriginalCollection.zip",
    "petal-memory": "EO_MoodArchive_PetalMemory.zip",
  };
  
  const filename = files[slug];
  
  if (!filename) {
    return new Response("Not Found", { status: 404 });
  }
  
  const filePath = path.join(
    process.cwd(),
    "private",
    "downloads",
    filename
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