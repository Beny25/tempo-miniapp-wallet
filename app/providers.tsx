"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createConfig } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { http } from "viem";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { tempoTestnet } from "@/lib/chain";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;
const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  publicClient: http(tempoTestnet.rpcUrls.default.http[0]),
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  // chains: [tempoTestnet], // hilangkan kalau bikin error
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    </QueryClientProvider>
  );
}
