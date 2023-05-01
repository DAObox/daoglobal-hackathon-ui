import TokenIcon from "@components/icons/token";

export default function TransactionModalCard() {
    return(
        <div className="flex space-x-1.5 justify-center items-center w-full border border-border p-2.5 rounded-lg">
            <div><TokenIcon /></div>
            <div className="w-full flex justify-between">
                <div>
                    <p className="font-semibold">Deposit</p>
                    <p className="text-sm">last Monday at 2:00 PM</p>
                </div>
                <div className="w-fit space-x-1.5 flex">
                    <div className="w-fit h-full flex space-x-2">
                        <div>
                            <p className="font-semibold">+90k USDC</p>
                            <p className="text-sm">$89937.07</p>
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                    </div>
                </div>
            </div>
        </div>
    )
}