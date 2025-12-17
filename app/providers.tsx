"use client";

import { Web3Provider } from "@/lib/wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Web3Provider>{children}</Web3Provider>;
}

