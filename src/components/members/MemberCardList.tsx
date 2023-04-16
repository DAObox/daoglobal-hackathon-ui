import { pluginAddress } from "@constants/daoConfig";
import MemberCard from "./MemberCard";
import {  useFetchMembersAndBalances } from '@daobox/use-aragon'

export default function MemberCardList() {
    const { data, isLoading, isError } = useFetchMembersAndBalances({
        pluginAddress: pluginAddress,
    })
    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
        </div>
    )
}