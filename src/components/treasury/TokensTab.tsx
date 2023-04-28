import DepositIcon from "@components/icons/deposit";
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export default function TokenTab() {

    const cities = [
        {
          city: "Athens",
          rating: "2 open PR",
        },
        {
          city: "Luzern",
          rating: "1 open PR",
        },
        {
          city: "Zürich",
          rating: "0 open PR",
        },
        {
          city: "Vienna",
          rating: "1 open PR",
        },
        {
          city: "Ermatingen",
          rating: "0 open PR",
        },
        {
          city: "Lisbon",
          rating: "0 open PR",
        },
      ];

    return(
        <div>
            <ul role="list" className="divide-y divide-gray-200 card shadow-xl p-8">
                {cities.map((item, index) => (
                    <li key={index} className="px-4 py-4 sm:px-0">
                        {/* Your content */}
                        <div className="flex space-x-1.5 justify-center w-full">
                            <div><DepositIcon /></div>
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
                                        <button>
                                            <ChevronRightIcon className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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