import { pluginAddress } from "@constants/daoConfig";
import MemberCard from "./MemberCard";
import {  useFetchMembersAndBalances } from '@daobox/use-aragon'
import Loading from "./Loading";
import Error from "./Error";

export default function MemberCardList() {
    const { data, isLoading, isError } = useFetchMembersAndBalances({
        pluginAddress: pluginAddress,
    })
    if (isLoading) {
        return <div className="w-full mt-20 flex justify-center"><Loading /></div>
    }
    else if (isError) {
        return <div className="w-full"><Error /></div>
    }
    else {
        return(
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {
                    data?.map(item => <MemberCard avatar={""} address={item.address || ""} balance={(Number(item.balance)/10**18).toString()} power={""} />)
                }
            </div>
        )
    }
}