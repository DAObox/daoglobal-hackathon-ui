/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Head from "next/head";
import { useProfilesOwnedBy, Profile, usePublications, ProfileId } from "@lens-protocol/react-web";
import React from "react";
import { useBalanceAndPower } from "@hooks/lens/useBalanceAndPower";
import { useDelegateNFT } from "@hooks/lens/useDelegateNFT";
import { Address, useAccount } from "wagmi";

import { FollowOnLens, Theme, Size, Publication } from "@lens-protocol/widgets-react";
import { useRouter } from "next/router";
import { useOpCollateral, useProposerFreeCollateral } from "@hooks/op/read";
import { BigNumber, ethers } from "ethers";
import { useWithdrawCollateral } from "@hooks/op/write";
import { Mailchain } from "@mailchain/sdk";
import { mailchainSecretRecoveryPhrase, mailchainSender } from "@constants/daoConfig";
import { toast } from "react-toastify";

const Member = () => {
  const { query } = useRouter();
  const memberAddress = query.member as string;
  const { data } = useProfilesOwnedBy({
    address: memberAddress,
    limit: 5,
  });
  const profile = data?.[0];
  if (!memberAddress) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Dao members</title>
      </Head>

      <div className="mx-auto flex w-full space-x-6 px-6 ">
        {/* Left column */}
        <div className="basis-8/12">
          <div className="h-screen ">
            <Feed profileId={profile?.id.toString()} member={memberAddress} />
          </div>
        </div>

        {/* Right column */}
        <div className="flex w-full basis-6/12">
          <ProfileBar profile={profile} member={memberAddress} />
        </div>
      </div>
    </>
  );
};

function Stats({ member }: { member: string }) {
  const { token } = useBalanceAndPower(member as Address);
  const { freeCollateral } = useProposerFreeCollateral(member as Address);
  const { write, status } = useWithdrawCollateral(freeCollateral as BigNumber);
  return (
    <div className="stats stats-horizontal w-full bg-base-200 shadow">
      <div className="stat">
        <div className="stat-title">Free Collateral</div>
        <div className="stat-value">
          {parseFloat(ethers.utils.formatUnits(freeCollateral ?? 0, "ether")).toFixed(2)}
        </div>
        <div className="stat-actions">
          <button
            className={`btn-success btn-sm btn ${status === "loading" ? "loading" : ""}`}
            disabled={status === "loading"}
            onClick={() => write?.()}
          >
            Withdraw Funds
          </button>
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Tokens</div>
        <div className="stat-value">{token?.balance ?? 0}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Power</div>
        <div className="stat-value">{token?.power ?? 0}</div>
      </div>
    </div>
  );
}

interface ProfileProps {
  member: string;
  profile?: Profile;
}

const ProfileBar: React.FC<ProfileProps> = ({ profile, member }) => {
  const { write } = useDelegateNFT(member as Address);
  const handleDelegate = async () => {
    write?.();
    const mailchainInstance = Mailchain.fromSecretRecoveryPhrase(mailchainSecretRecoveryPhrase);
    const { data, error } = await mailchainInstance.sendMail({
      from: mailchainSender,
      to: [`${member as Address}@ethereum.mailchain.com`],
      subject: `A delegation just occurred to you`,
      content: {
        text: "Delegation",
        html: `<p>Your lens profile has received voting power!</p>`,
      },
    });
    if (error) {
      toast.warn("Could not notify proposer");
      return;
    }

    console.log({ data });
  };
  return (
    <div className="w-full flex-col justify-center align-middle">
      {profile ? (
        <div className="w-full space-y-4">
          <ProfileCard profile={profile} member={member} />
          <Stats member={member} />
        </div>
      ) : (
        <>
          <div className="text-error">Profile does not exist</div>
          <button
            className="glass btn-block btn-md btn mt-6 text-primary-focus"
            onClick={() => handleDelegate()}
          >
            delegate
          </button>
        </>
      )}
    </div>
  );
};

const ProfileCard: React.FC<ProfileProps> = ({ profile, member }) => {
  const { write } = useDelegateNFT(member as Address);
  const { name, bio, handle } = profile ?? {};

  const picture = ipfsUriToUrl(profile);

  const handleDelegate = async () => {
    write?.();
    const mailchainInstance = Mailchain.fromSecretRecoveryPhrase(mailchainSecretRecoveryPhrase);
    const { data, error } = await mailchainInstance.sendMail({
      from: mailchainSender,
      to: [`${member as Address}@ethereum.mailchain.com`],
      subject: `A delegation just occurred to you`,
      content: {
        text: "Delegation",
        html: `<p>Your lens profile has received voting power!</p>`,
      },
    });
    if (error) {
      toast.warn("Could not notify proposer");
      return;
    }

    console.log({ data });
  };

  return (
    <div className="card w-full bg-base-200 shadow-lg">
      <div className="card-body items-center text-center">
        <div className="flex items-center justify-center">
          <div className="mask mask-squircle avatar w-40">
            <img src={picture} />
          </div>
        </div>
        <div className="flex-col pb-2">
          <h1 className="align-middle text-3xl">{name}</h1>
          <h3 className="text-xl">@{handle}</h3>
          <p className="py-2">{bio}</p>
          <button
            className="glass btn-block btn-md btn text-primary-focus"
            onClick={() => handleDelegate()}
          >
            delegate
          </button>
        </div>
        <FollowOnLens handle={handle?.split(".")[0] ?? ""} theme={Theme.dark} size={Size.large} />
      </div>
    </div>
  );
};

export default Member;

interface FeedProps {
  member?: string;
  profileId?: string;
}
const Feed: React.FC<FeedProps> = ({ profileId }) => {
  const { data: publications } = usePublications({
    profileId: profileId as ProfileId,
    limit: 4,
  });

  return (
    <>
      <div className="h-screen">
        <ul role="list" className="w-full  space-y-3">
          {publications?.length ? (
            publications.map((item) => (
              <Publication key={item.id} publicationId={item.id} theme={Theme.dark} />
            ))
          ) : (
            <div className="text-error">No publications found for inexistent member</div>
          )}
        </ul>
      </div>
    </>
  );
};

export function ipfsUriToUrl(ipfsUri: any) {
  const uri = ipfsUri?.picture?.original?.url as string;

  if (typeof uri === "string" && uri.startsWith("https://")) {
    return uri;
  }
  if (typeof uri === "string" && uri.startsWith("ipfs://")) {
    return "https://ipfs.io/ipfs/" + uri.slice(7);
  } else {
    return `https://api.dicebear.com/6.x/identicon/svg?seed=${uri}&backgroundColor=b6e3f4`;
  }
}
