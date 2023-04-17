import { useFetchMembers } from "@daobox/use-aragon";
import Button from "./Button";
import { pluginAddress } from "@constants/daoConfig";

export default function MembersCardCount() {
    const { data, isFetching } = useFetchMembers({
        pluginAddress: pluginAddress
    })
    return(
        <div className="card w-full bg-secondary text-neutral-content">
            <div className="px-8 py-8 w-full h-full flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2.5 sm:space-y-0">
                <div className="space-y-2.5">
                    <h2 className="card-title text-white">{isFetching ? "Fetching Members..." : data?.length === 1 ? "1 Members" : data?.length.toString().concat(" Members")}</h2>
                    <p className="font-semibold text-white">Wallet based</p>
                </div>
                <div>
                    <Button text="Manage Members" clickFunction={() => {
                        console.log("Clicked");
                    }} />
                </div>
            </div>
        </div>
    )
}