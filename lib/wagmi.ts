"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { http } from "viem";
import { injected, walletConnect } from "wagmi/connectors";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { tempoTestnet } from "./chain";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

export const wagmiConfig = createConfig({
  chains: [tempoTestnet],
  transports: {
    [tempoTestnet.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  ssr: true,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains: [tempoTestnet],
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
