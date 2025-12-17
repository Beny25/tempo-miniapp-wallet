"use client";

import { useAccount, useDisconnect } from "wagmi";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected)
    return (
      <button
        onClick={() => (window as any).Web3Modal.open()}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Connect Wallet
      </button>
    );

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm">{address}</p>
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Disconnect
      </button>
    </div>
  );
}

