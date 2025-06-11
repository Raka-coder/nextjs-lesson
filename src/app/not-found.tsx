"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page not found</p>
        <p className="text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="mt-4">
          <button
            onClick={() => router.back()}
            className="text-blue-500 hover:underline"
          >
            Go Back
          </button>
        </p>
      </div>
    </div>
  );
}
