"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") return <div className="flex items-center justify-center">Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="inline-flex items-center justify-between w-full mb-4">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-2 cursor-pointer"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
      <p className="mb-4">Selamat datang, {session?.user?.name}!</p>
      <p className="mb-4">Status: {status}</p>
      <div className="flex mt-4">
        <Link href="/product" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Go to Product Page
        </Link>
      </div>
    </div>
  );
}
