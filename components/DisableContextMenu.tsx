"use client";

import { useEffect } from "react";

export default function DisableContextMenu() {
  useEffect(() => {
    const preventContextMenu = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return null;
}