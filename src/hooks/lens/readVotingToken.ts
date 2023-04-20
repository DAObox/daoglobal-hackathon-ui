import { Address, useContractRead } from "wagmi";
import abi from "../../abis/IFollowNFTABI";
import { daoTokenAddress as address } from "../../constants";
import { ethers } from "ethers";

const BN = ethers.BigNumber.from;

const config = {
  address,
  abi,
  chainId: 137,
};

export const useTotalSupply = () => {
  return useContractRead({
    ...config,
    functionName: "totalSupply",
  });
};

export const useGetPowerByBlockNumber = (
  address: Address,
  blockNumber: number
) => {
  return useContractRead({
    ...config,
    functionName: "getPowerByBlockNumber",
    args: [address, BN(blockNumber)],
  });
};

export const useGetDelegatedSupplyByBlockNumber = (
  blockNumber: number | string
) => {
  return useContractRead({
    ...config,
    functionName: "getDelegatedSupplyByBlockNumber",
    args: [BN(blockNumber)],
  });
};

export const useTokenUri = (tokenId: string | number) => {
  return useContractRead({
    ...config,
    functionName: "tokenURI",
    args: [BN(tokenId)],
  });
};

export const useBalanceOf = (address: Address) => {
  return useContractRead({
    ...config,
    functionName: "balanceOf",
    args: [address],
  });
};

export const useOwnerOf = (tokenId: string | number) => {
  return useContractRead({
    ...config,
    functionName: "ownerOf",
    args: [BN(tokenId)],
  });
};

export const useTokenOfOwnerByIndex = (owner: Address, index: number) => {
  return useContractRead({
    ...config,
    functionName: "tokenOfOwnerByIndex",
    args: [owner, BN(index)],
  });
};

export const useTokenByIndex = (index: number) => {
  return useContractRead({
    ...config,
    functionName: "tokenByIndex",
    args: [BN(index)],
  });
};

export const useMintTimestampOf = (tokenId: string | number) => {
  return useContractRead({
    ...config,
    functionName: "mintTimestampOf",
    args: [BN(tokenId)],
  });
};

export const useIsApprovedForAll = (owner: Address, operator: Address) => {
  return useContractRead({
    ...config,
    functionName: "isApprovedForAll",
    args: [owner, operator],
  });
};

export const getApproved = (tokenId: string | number) => {
  return useContractRead({
    ...config,
    functionName: "getApproved",
    args: [BN(tokenId)],
  });
};

export const useExists = (tokenId: string | number) => {
  return useContractRead({
    ...config,
    functionName: "exists",
    args: [BN(tokenId)],
  });
};
