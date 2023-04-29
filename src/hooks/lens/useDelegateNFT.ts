import { toast } from "react-toastify";
import { Address, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { settingsFollowNFT } from "./settings";

export const useDelegateNFT = (to: Address) => {
  const addRecentTransaction = useAddRecentTransaction();

  const { config } = usePrepareContractWrite({
    ...settingsFollowNFT,
    functionName: "delegate",
    args: [to],
  });

  const {
    data,
    write,
    status: submitStatus,
  } = useContractWrite({
    ...config,
    onSuccess: (tx: any) => {
      toast("Delegating Tokens");
      addRecentTransaction({
        hash: tx.hash,
        description: "Delegate Tokens",
      });
    },
  });

  const { status: transactionStatus } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      toast.success("Follow NFT Minted");
    },
  });

  return {
    write,
    submitStatus,
    transactionStatus,
  };
};