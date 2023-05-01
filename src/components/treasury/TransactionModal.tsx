import { XMarkIcon } from "@heroicons/react/24/outline";
import { truncateAddress } from "@utils/addresses";
import { useRef } from "react";
import TransactionModalCard from "./TransactionModalCard";

export default function TransactionModal() {
    const ref: any = useRef(null)
    return(
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box bg-base-100">
                    <div className="w-full flex justify-between items-center">
                        <div><h3 className="font-bold text-lg">Transaction Detail</h3></div>
                        <button onClick={() => ref.current?.click()}><XMarkIcon className="w-6 h-6" /></button>
                    </div>
                    <div className="py-4 space-y-2.5">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <div>
                                    <p>From</p>
                                </div>
                                <div>
                                    <input type="text" placeholder="Type here" className="border border-border w-full max-w-xs rounded-lg"
                                    value={truncateAddress("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73")} readOnly />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>To</p>
                                </div>
                                <div>
                                    <input type="text" placeholder="Type here" className="border border-border w-full max-w-xs rounded-lg"
                                    value={truncateAddress("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73")} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <TransactionModalCard />
                        </div>
                    </div>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    </div>
                </div>
                <label htmlFor="my-modal-6" className="btn hidden" ref={ref}>Yay!</label>
            </div>
        </>
    )
}