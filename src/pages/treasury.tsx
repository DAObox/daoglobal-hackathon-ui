import MemberCardList from "@components/members/MemberCardList";
import CreateProposalCard from "@components/treasury/CreateProposalCard";
import TreasuryTabs from "@components/treasury/TreasuryTabs";
import { Tab, TabList } from "@tremor/react"
import { type NextPage } from "next";
import Head from "next/head";

const Treasury: NextPage = () => {
  return (
    <>
      <Head>
        <title>DAOGlobal Treasury UI</title>
        <meta name="description" content="DAOBox DAO Treasury" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full bg-base w-full justify-center">
        <div className="w-full max-w-7xl space-y-6">
          <CreateProposalCard />
          <TreasuryTabs />
          <MemberCardList />
        </div>
      </main>
    </>
  );
};

export default Treasury;
