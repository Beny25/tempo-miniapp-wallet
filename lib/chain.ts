import { defineChain } from "viem";

export const tempoTestnet = defineChain({
  id: 42429,
  name: "Tempo Testnet",
  network: "tempo-testnet",
  nativeCurrency: {
    name: "Path",
    symbol: "PATH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_TEMPO_RPC_URL!],
    },
  },
  blockExplorers: {
    default: {
      name: "Tempo Scout",
      url: "https://scout.tempo.xyz",
    },
  },
  testnet: true,
});

