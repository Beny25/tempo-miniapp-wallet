"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { w3mConnectors } from "@web3modal/wagmi/react";
import { useState } from "react";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: w3mConnectors({ version: 2 })[0], // web3modal connector
  });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        <button
          onClick={() => connect()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-gray-200 rounded">
            {address?.slice(0, 6)}…{address?.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
