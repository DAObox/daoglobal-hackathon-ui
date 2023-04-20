import { Address } from "wagmi";

export enum VoteOption {
  None,
  Abstain,
  Yes,
  No,
}

export interface IsMemberProps {
  address: Address;
}

export interface TotalVotingPowerProps {
  blockNumber: string | number;
}

export interface PagniatedProposalsProps {
  start?: number;
  perPage?: number;
  direction?: "decrement" | "increment";
}

export interface GetProposalProps {
  proposalId: string | number;
}

export interface SupportThresholdReachedProps {
  proposalId: string | number;
}

export interface MinParticipationProps {
  proposalId: string | number;
}

export interface CanVoteProps {
  proposalId: string | number;
  address: Address;
  option: VoteOption;
}

export interface VoterOptionsProps {
  proposalId: string | number;
  address: Address;
}
