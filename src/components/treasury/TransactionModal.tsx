import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { truncateAddress } from "@utils/addresses";
import { useRef } from "react";
import TransactionModalCard from "./TransactionModalCard";
import Button from "@components/buttons/Button";

export default function TransactionModal() {
    const ref = useRef<HTMLLabelElement>(null)
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
                                    <input type="text" placeholder="Type here" className="border border-border w-full max-w-xs rounded-lg 
                                    focus:border-black focus:ring-border focus:border focus:ring-0"
                                    value={truncateAddress("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73")} readOnly />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>To</p>
                                </div>
                                <div>
                                    <input type="text" placeholder="Type here" className="border border-border w-full max-w-xs rounded-lg 
                                    focus:border-black focus:ring-border focus:border focus:ring-0"
                                    value={truncateAddress("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73")} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <TransactionModalCard />
                        </div>
                        <div>
                            <Button text="View on blocker explorer" icon={<><PlusIcon className="w-6 h-6 text-neutral" /></>} clickFunction={() => {
                                console.log("clicked")
                            }} />
                        </div>
                    </div>
                </div>
                <label htmlFor="my-modal-6" className="btn hidden" ref={ref}>Yay!</label>
            </div>
        </>
    )
}