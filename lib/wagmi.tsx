"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { http } from "viem";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tempoTestnet } from "./chain";
import { useEffect } from "react";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [tempoTestnet],
  transports: {
    [tempoTestnet.id]: http(tempoTestnet.rpcUrls.default.http[0]),
  },
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  ssr: false,
});

let modalInitialized = false;

export function Web3Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!modalInitialized) {
      createWeb3Modal({
        wagmiConfig,
        projectId,
      });
      modalInitialized = true;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        {children}
      </WagmiProvider>
    </QueryClientProvider>
  );
}

