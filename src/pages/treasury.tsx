import CreateProposalCard from "@components/treasury/CreateProposalCard";
import TokenTab from "@components/treasury/TokensTab";
import TransactionsTab from "@components/treasury/TransactionsTab";
import TreasuryTabs from "@components/treasury/TreasuryTabs";
import { type NextPage } from "next";
import Head from "next/head";
import { useReadLocalStorage } from "usehooks-ts";

const Treasury: NextPage = () => {
  const tabs = useReadLocalStorage("tab")
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
          {
            tabs == "tokens" ? <TokenTab /> : <TransactionsTab />
          }
        </div>
      </main>
    </>
  );
};

export default Treasury;
