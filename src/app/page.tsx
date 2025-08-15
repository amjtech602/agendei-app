"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h1>Bem-vindo, {session?.user?.name}</h1>
      <p>Email: {session?.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="w-full bg-blue-600 text-white mt-2 p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Sair
      </button>
    </div>
  );
}
