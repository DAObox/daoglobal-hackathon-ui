import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { type CreateProposalVoting, type CreateProposalDetail } from "types";
import { PrimaryButton } from "@components/inputs";
import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CreateProposalsActionStep } from "./CreateProposalsActionStep";
import {
  CreateProposalDetailsStep,
  CreateProposalVoteOptionsStep,
} from "@components/proposals/components";
import { JSONtoFile, storeFiles } from "@utils/ipfs-utils";
import { useAccount } from "wagmi";

export const CreateProposalsModal = () => {
  const [isOpen, setOpen] = useState(true);
  const { address } = useAccount();
  const [currentStep, setStep] = useState<1 | 2 | 3>(1);
  const [proposalsDetail, setDetail] = useState<CreateProposalDetail | null>(null);
  const [proposalVote, setVoteDetail] = useState<CreateProposalVoting | null>(null);
  const [metadataCID, setMetadataCID] = useState("");

  const proceedToStep2 = (value: CreateProposalDetail) => {
    setDetail(value);
    setStep(2);
  };

  const uploadProposalData = async (voteDetail: CreateProposalVoting) => {
    const resources = proposalsDetail!.resources || [];
    const proposalData = {
      title: proposalsDetail!.title,
      summary: proposalsDetail!.summary,
      resources: resources.map(({ name, link }) => ({
        name: name ?? "",
        url: link ?? "",
      })),
      startDate: new Date(voteDetail.start_date ?? ""),
      endDate: new Date(voteDetail.end_date),
      creatorVote: Number(voteDetail.creator_vote),
    };
    const proposalFile = JSONtoFile(JSON.stringify(proposalData), `${address ?? ""}.txt`);
    const metadataCID = await storeFiles(proposalFile);
    console.log({ metadataCID });
    setMetadataCID(metadataCID);
    setVoteDetail(voteDetail);
    setStep(3);
  };

  return (
    <React.Fragment>
      <PrimaryButton
        onClick={() => setOpen(true)}
        startIcon={<PlusSmallIcon width={25} height={25} />}
        className="text-white"
      >
        <span className="flex-1">New Proposal</span>
      </PrimaryButton>
      <Dialog open={isOpen} onClose={() => setOpen(false)} className="relative z-50">
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          aria-hidden="true"
        >
          <Dialog.Panel className="m relative max-h-full w-full max-w-2xl overflow-auto rounded-lg bg-secondary p-10">
            <button
              onClick={() => setOpen(false)}
              className="btn-ghost btn absolute right-0 top-0 text-black"
            >
              <XMarkIcon width={18} height={18} />
            </button>
            <Dialog.Title className="text-4xl font-bold">Create Optimistic Proposal</Dialog.Title>

            <div className="mt-4">
              <p>
                <span className="text-primary">Step {currentStep}/3: </span>
                <span className="font-bold text-primary">
                  {currentStep === 3 ? "Set Actions" : "Proposal Detail"}
                </span>
              </p>
            </div>

            <div className="mt-4 w-full">
              {currentStep === 1 && (
                <CreateProposalDetailsStep
                  proposal={proposalsDetail!}
                  onComplete={proceedToStep2}
                  onCancel={() => setOpen(false)}
                />
              )}

              {currentStep === 2 && (
                <CreateProposalVoteOptionsStep
                  onComplete={uploadProposalData}
                  voteOptions={proposalVote!}
                  onCancel={() => setStep(1)}
                />
              )}

              {currentStep === 3 && (
                <CreateProposalsActionStep
                  onComplete={(actions) => {
                    console.log("ACTIONS", actions);
                    setOpen(false);
                    setDetail(null);
                    setVoteDetail(null);
                  }}
                  metadata={metadataCID}
                  onCancel={() => setStep(2)}
                />
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
