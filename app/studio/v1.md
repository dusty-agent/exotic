"use client";

import { useState } from "react";

const bands = [
  "Classic",
  "Wave",
  "Flat",
  "Twist",
];

const metals = [
  "Silver",
  "14K Gold",
  "18K Gold",
  "Platinum",
];

const stones = [
  "None",
  "Diamond",
  "Ruby",
  "Sapphire",
];

export default function StudioPage() {

  const [band, setBand] =
    useState("Classic");

  const [metal, setMetal] =
    useState("Silver");

  const [stone, setStone] =
    useState("None");

  const [size, setSize] =
    useState(12);

  return (
    <>

      <main className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-12">

          <h1 className="text-5xl font-semibold">
            Studio
          </h1>

          <p className="mt-4 text-[#8A7A72]">
            Configure your future piece.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-12">

          <div className="flex min-h-[700px] items-center justify-center rounded-xl bg-[#F4EBE8]">

            <div className="text-center">

              <div className="mb-8 text-8xl">
                💍
              </div>

              <div>{band}</div>
              <div>{metal}</div>
              <div>{stone}</div>
              <div>{size}호</div>

            </div>

          </div>

          <div className="space-y-8">

            <div>
              <label className="mb-2 block">
                Band Style
              </label>

              <select
                className="w-full border p-3"
                value={band}
                onChange={(e)=>
                  setBand(e.target.value)
                }
              >
                {bands.map(item=>(
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block">
                Metal
              </label>

              <select
                className="w-full border p-3"
                value={metal}
                onChange={(e)=>
                  setMetal(e.target.value)
                }
              >
                {metals.map(item=>(
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block">
                Center Stone
              </label>

              <select
                className="w-full border p-3"
                value={stone}
                onChange={(e)=>
                  setStone(e.target.value)
                }
              >
                {stones.map(item=>(
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block">
                Ring Size
              </label>

              <input
                type="number"
                value={size}
                onChange={(e)=>
                  setSize(Number(e.target.value))
                }
                className="w-full border p-3"
              />
            </div>

            <div className="border-t pt-8">

              <button className="w-full rounded-lg bg-black py-4 text-white">
                Request Production
              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}