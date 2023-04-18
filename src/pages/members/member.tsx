import MemberProfileCard from "@components/members/MemberProfileCard";
import Head from "next/head";

export default function Member() {
    return(
        <>
            <Head>
                <title>Dao members</title>
            </Head>
            <div className="flex h-full bg-base w-full justify-center">
                <div className="w-full max-w-7xl space-y-6">
                    <MemberProfileCard />
                </div>
            </div>
        </>
    )
}