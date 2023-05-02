import { ChevronRightIcon } from "@heroicons/react/24/outline"
import TransactionCard from "./TransactionCard";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { daoAddressOrEns } from "@constants/daoConfig";
import { TransactionResponse } from "alchemy-sdk";

export default function TransactionsTab() {

  const [data, setData] = useState<TransactionResponse[]>()

      const etherscanProvider = new ethers.providers.EtherscanProvider()

      useEffect(() => {
            etherscanProvider.getHistory("0xed5af388653567af2f388e6224dc7c4b3241c544").then(res => { return res }).then((history) => {
              console.log(history.slice(0, 10))
              setData(history.slice(0, 10))
              return history
            }).catch(error => console.log(error));
      })

    return(
        <div>
            <ul role="list" className="divide-y divide-gray-200 card shadow-xl p-8">
                {data?.map((item, index) => (
                    <li key={index} className="px-4 py-4 sm:px-0">
                        {/* Your content */}
                        <TransactionCard type={item.to == daoAddressOrEns ? "Deposit" : "Sent"} timestamp={Number(item.timestamp)} value={item.value.toString()} />
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