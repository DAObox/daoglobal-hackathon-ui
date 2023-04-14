import { Proposal } from "@constants/mocks/MockProposals";
import { ClockIcon } from "@heroicons/react/24/outline";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { truncateAddress } from "@utils/addresses";
import { upperCase } from "lodash";

dayjs.extend(relativeTime);

type Props = Proposal;

export const ProposalCard: React.FC<Props> = ({ status, ...proposal }) => {
  return (
    <div className="card col-span-2 w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-between">
          <div className="flex flex-1 items-center justify-start gap-2 text-sm font-medium">
            <div className="placeholder avatar">
              <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                <span className="text-xs">
                  {upperCase(proposal.dao.name.substring(0, 2))}
                </span>
              </div>
            </div>
            <p className="text-md">
              {proposal.dao.name} by <strong>{proposal.dao.address}</strong>
            </p>
          </div>

          <span className="badge badge-md rounded-xl">{status}</span>
        </div>
        <h2 className="card-title mt-5">{proposal.metadata.title}</h2>
        <p>{proposal.metadata.summary}</p>
      </div>
    </div>
  );
};
