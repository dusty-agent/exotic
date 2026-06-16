import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://exoticordinary.com",
      lastModified: new Date(),
    },
    {
      url: "https://exoticordinary.com/store",
      lastModified: new Date(),
    },
    {
      url: "https://exoticordinary.com/cart",
      lastModified: new Date(),
    },
  ];
}