import { ChevronRightIcon } from "@heroicons/react/24/outline"
import TransactionCard from "./TransactionCard";
import { useState } from "react";
import { ethers } from "ethers";
import { daoAddressOrEns } from "@constants/daoConfig";

export default function TransactionsTab() {

  const [data, setData] = useState([])

      const etherscanProvider = new ethers.providers.EtherscanProvider()

      etherscanProvider.getHistory(daoAddressOrEns).then((history: any) => {
        console.log(history.slice(0, 10))
        setData(history.slice(0, 10))
        return history
      });

    return(
        <div>
            <ul role="list" className="divide-y divide-gray-200 card shadow-xl p-8">
                {data?.map((item: any, index: any) => (
                    <li key={index} className="px-4 py-4 sm:px-0">
                        {/* Your content */}
                        <TransactionCard type={item.to == daoAddressOrEns ? "Deposit" : "Sent"} timestamp={item.timestamp} value={item.value} />
                    </li>
                ))}
                <button className="btn btn-xs btn-md remove-text-transform btn-neutral text-white max-w-fit sm:w-auto mt-4">
                    <div className="flex items-center">
                        <span>See all tokens</span>
                        <span>
                            <ChevronRightIcon className="w-6 h-6" />
                        </span>
                    </div>
                </button>
            </ul>
        </div>
    )
}