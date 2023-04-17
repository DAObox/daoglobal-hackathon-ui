import MemberCard from "./MemberCard";
import { mockMembersCards } from "@constants/mocks/MockMemberCards";

export default function MemberCardList() {
    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {
                mockMembersCards?.map(item => <MemberCard key={item?.id} avatar={item?.avatar} address={item?.address || ""} 
                balance={(Number(item?.balance)/10**18).toString()} power={item?.power} />)
            }
        </div>
    )
}