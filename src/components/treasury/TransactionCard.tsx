import DepositIcon from "@components/icons/deposit";
import TransactionModal from "./TransactionModal";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { TransactionCardType } from "types/typings";
import Moment from "react-moment"

export default function TransactionCard({ type, timestamp, value } : TransactionCardType) {

    const ref = useRef<HTMLLabelElement>(null)
    const date = new Date(timestamp)

    return(
        <div className="flex space-x-1.5 justify-center w-full">
            <div><DepositIcon /></div>
            <div className="w-full flex justify-between">
                <div>
                    <p className="font-semibold">{type}</p>
                    <Moment fromNow>{date}</Moment>
                </div>
                <div className="w-fit space-x-1.5 flex">
                    <div className="w-fit h-full flex space-x-2">
                        <div>
                            <p className="font-semibold">+90k USDC</p>
                            <p className="text-sm">$89937.07</p>
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                    <TransactionModal />
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <label htmlFor="my-modal-6" className="hidden" ref={ref}>
                        <ChevronRightIcon className="w-6 h-6" />
                    </label>
                    <button onClick={() => ref.current?.click()}>
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}