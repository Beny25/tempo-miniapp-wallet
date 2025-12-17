import { createPublicClient, http } from "viem";

export const tempoClient = createPublicClient({
  chain: {
    id: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
    rpcUrls: {
      default: process.env.NEXT_PUBLIC_TEMPO_RPC_URL!,
    },
  },
  transport: http(process.env.NEXT_PUBLIC_TEMPO_RPC_URL!),
});

