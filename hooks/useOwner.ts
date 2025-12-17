import { useContractRead } from "wagmi";
import BaseOwnerAbi from "../abis/BaseOwner.json";

export function useOwner(address: `0x${string}`) {
  return useContractRead({
    address,
    abi: BaseOwnerAbi,
    functionName: "owner",
  });
}

