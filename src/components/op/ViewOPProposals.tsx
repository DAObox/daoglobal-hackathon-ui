/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { ViewProposalsTab } from "./components/ViewProposalsTab";
import { CreateProposalsModal } from "./components/CreateProposalModal";

export const OptimisticProposalsView: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex h-full w-full flex-1 flex-col gap-10">
        <div>
          <div className="flex items-center justify-between rounded-lg bg-[#191B1E] px-4 py-8 text-white">
            <h1 className="text-4xl font-bold">Proposals</h1>

            <CreateProposalsModal />
          </div>
        </div>

        <ViewProposalsTab />
      </div>
    </React.Fragment>
  );
};
