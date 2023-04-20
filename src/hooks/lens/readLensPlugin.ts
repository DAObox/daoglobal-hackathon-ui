import {
  paginatedIndexesConfig,
  useContractInfiniteReads,
  useContractRead,
  useContractReads,
} from "wagmi";
import abi from "abis/LensVotingPluginABI";
import { votingPluginAddress as address } from "@constants/index";
import { BigNumber, ethers } from "ethers";
import {
  IsMemberProps,
  TotalVotingPowerProps,
  GetProposalProps,
  SupportThresholdReachedProps,
  MinParticipationProps,
  CanVoteProps,
  VoterOptionsProps,
  PagniatedProposalsProps,
} from "types/lens-hooks-typings";

const BN = ethers.BigNumber.from;

const config = {
  address,
  abi,
  chainId: 137,
};

export const useProposalCount = () => {
  return useContractRead({
    ...config,
    functionName: "proposalCount",
  });
};

/**
 * Retrieves a paginated list of proposals using the provided pagination settings.
 *
 * @param {Object} [params={}] - The parameters object.
 * @param {number} [params.start=0] - The starting index for the pagination.
 * @param {number} [params.perPage=10] - The number of items to display per page.
 * @param {string} [params.direction="decrement"] - The direction of pagination, either "increment" or "decrement".
 * @returns {any} The paginated list of proposals based on the provided settings.
 */
export const usePaginatedProposals = ({
  start = 0,
  perPage = 10,
  direction = "decrement",
}: PagniatedProposalsProps = {}): any => {
  const { data } = useProposalCount();

  const index: number = data instanceof BigNumber && data.gt(0) ? data.toNumber() : 0;

  return useContractInfiniteReads({
    cacheKey: "paginatedProposals",
    ...paginatedIndexesConfig(
      (index) => {
        return [
          {
            ...config,
            functionName: "getProposal",
            args: [BigNumber.from(index)] as const,
          },
        ];
      },
      { start, perPage, direction }
    ),
    enabled: !!(index && index > 0),
  });
};

/**
 * Checks if an account is a member of a organization.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.address - The account address to be checked.
 */
export const useIsMember = ({ address }: IsMemberProps) => {
  return useContractRead({
    ...config,
    args: [address],
  });
};

/**
 * Retrieves vote settings from a specific voting contract.
 *
 */
export const useVoteSettings = () => {
  return useContractReads({
    contracts: [
      {
        ...config,
        functionName: "supportThreshold",
      },
      {
        ...config,
        functionName: "minParticipation",
      },
      {
        ...config,
        functionName: "minDuration",
      },
      {
        ...config,
        functionName: "minProposerVotingPower",
      },
      {
        ...config,
        functionName: "votingMode",
      },
    ],
  });
};

/**
 * Retrieves the total voting power at a specific block number
 *
 * @param {Object} params - The parameters object.
 * @param {number|string} params.blockNumber - The block number to retrieve the total voting power.
 */
export const useTotalVotingPower = ({ blockNumber }: TotalVotingPowerProps) => {
  return useContractRead({
    ...config,
    functionName: "totalVotingPower",
    args: [BN(blockNumber)],
  });
};

/**
 * Retrieves proposal details for a specific proposal ID using.
 *
 * @param {Object} params - The parameters object.
 * @param {number|string} params.proposalId - The proposal ID to retrieve the proposal details.
 */
export const useGetProposal = ({ proposalId }: GetProposalProps) => {
  return useContractRead({
    ...config,
    functionName: "getProposal",
    args: [BN(proposalId)],
  });
};

export const usesupportThreshold = () => {
  return useContractRead({
    ...config,
    functionName: "supportThreshold",
  });
};

export const useMinParticipation = () => {
  return useContractRead({
    ...config,
    functionName: "minParticipation",
  });
};

export const useIsSupportThresholdReached = ({ proposalId }: SupportThresholdReachedProps) => {
  return useContractRead({
    ...config,
    functionName: "isSupportThresholdReached",
    args: [BN(proposalId)],
  });
};

export const useIsSupportThresholdReachedEarly = ({
  proposalId,
}: {
  proposalId: string | number;
}) => {
  return useContractRead({
    ...config,
    functionName: "isSupportThresholdReachedEarly",
    args: [BN(proposalId)],
  });
};

export const useIsMinParticipationReached = ({ proposalId }: MinParticipationProps) => {
  return useContractRead({
    ...config,
    functionName: "isMinParticipationReached",
    args: [BN(proposalId)],
  });
};

/**
 * Checks if an account can participate in a proposal vote. This can be because the vote
 * has not started has ended, was executed, or the voter doesn't have voting powers.
 * @param {Object} params - The parameters object.
 * @param {number|string} params.proposalId - The proposal Id.
 * @param {string} params.address - The account address to be checked.
 * @param {string} params.option - Whether the voter abstains, supports or opposes the proposal.
 */
export const useCanVote = ({ proposalId, address, option }: CanVoteProps) => {
  return useContractRead({
    ...config,
    functionName: "canVote",
    args: [BN(proposalId), address, option],
  });
};

/**
 * Retrieves the voting option for a specific voter on a given proposal.
 *
 * @param {Object} params - The parameters object.
 * @param {number|string} params.proposalId - The proposal Id.
 * @param {string} params.address - The account address of the voter.
 */
export const useGetVoterOptions = ({ proposalId, address }: VoterOptionsProps) => {
  return useContractRead({
    ...config,
    functionName: "getVoteOption",
    args: [BN(proposalId), address],
  });
};
