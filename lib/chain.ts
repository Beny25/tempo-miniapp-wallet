import { Chain } from "viem";

export const tempoTestnet: Chain = {
  id: 42429,
  name: "Tempo Testnet",
  network: "tempo-testnet",
  nativeCurrency: {
    name: "PathUSD",
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
      name: "TempoScout",
      url: "https://scout.tempo.xyz",
    },
  },
  testnet: true,
};
