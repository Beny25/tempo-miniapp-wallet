"use client";

import { useEffect, useState } from "react";
import { tempoClient } from "@/lib/viem";
import BaseOwnerJson from "@/abis/BaseOwner.json";

export default function Home() {
  const [owner, setOwner] = useState<string>("");

  useEffect(() => {
    async function fetchOwner() {
      try {
        const result = await tempoClient.readContract({
          address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
          abi: BaseOwnerJson.abi,  // <-- pakai .abi
          functionName: "owner",
        });
        setOwner(result as string);
      } catch (err) {
        console.error("Error reading contract:", err);
      }
    }
    fetchOwner();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Tempo MiniApp Wallet</h1>
      <p>Owner address: {owner || "Loading…"}</p>
    </div>
  );
}

