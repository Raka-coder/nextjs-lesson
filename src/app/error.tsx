"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-500">Oops! Terjadi Kesalahan</h1>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Coba Lagi
      </button>
    </div>
  );
}
