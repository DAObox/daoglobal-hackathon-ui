import { DaoBoxFollowNft, LensHub, votingPluginAddress } from "@constants/index";
import LensHubABI from "abi/LensHubABI";
import FollowABI from "../../abi/LensFollowABI";
import LensVoting from "abi/LensVoting";

export const settingsLensVoting = {
  address: votingPluginAddress,
  abi: LensVoting,
};

export const settingsFollowNFT = {
  address: DaoBoxFollowNft,
  abi: FollowABI,
};

export const settingsLensHub = {
  address: LensHub,
  abi: LensHubABI,
};
