import { useContractRead } from "wagmi";
import { opConfig } from "../op-helpers";

export const useOpProposalsCount = () => {
  let count: number | undefined;
  const { data, isSuccess, isError, isLoading, error, status } = useContractRead({
    ...opConfig,
    functionName: "proposalCount",
  });

  if (data) {
    count = Number(data);
  }
  return { count, isSuccess, isError, isLoading, error, status };
};
