"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { http } from "viem";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { tempoTestnet } from "./chain";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

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

createWeb3Modal({
  wagmiConfig,
  projectId,
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      {children}
    </WagmiProvider>
  );
}

