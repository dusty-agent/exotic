import { silvlin } from "./silvlin";
import { livings } from "./livings";
import { moodArchive } from "./moodArchive";

const withBrand = <T extends Record<string, any>>(
  data: T,
  brand: string
) =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      {
        ...value,
        brand,
      },
    ])
  );

export const products = {
  ...withBrand(silvlin, "SILVLIN"),
  ...withBrand(livings, "LIVINGS"),
  ...withBrand(moodArchive, "MOOD ARCHIVE"),
};