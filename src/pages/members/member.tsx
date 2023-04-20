import MemberProfileCard from "@components/members/MemberProfileCard";
import Head from "next/head";
import DelegateTable from "@components/members/DelegateTable";
import { table } from "@constants/table";
import {
  useGetProposal,
  usePaginatedProposals,
  useProposalCount,
} from "@hooks/lens/readLensPlugin";

export default function Member() {
  const { data: paginatedProposals } = usePaginatedProposals();

  const { data: proposalCount } = useProposalCount();

  const { data: proposal } = useGetProposal({ proposalId: 1 });

  console.log({
    paginatedProposals,
    proposalCount,
    proposal,
  });

  return (
    <>
      <Head>
        <title>Dao members</title>
      </Head>
      <div className="bg-base flex h-full w-full justify-center">
        <div className="w-full max-w-7xl space-y-6">
          <MemberProfileCard />
          <DelegateTable data={table} />
        </div>
      </div>
    </>
  );
}
