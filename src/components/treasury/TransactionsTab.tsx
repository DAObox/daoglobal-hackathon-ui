import { ChevronRightIcon } from "@heroicons/react/24/outline"
import TransactionCard from "./TransactionCard";

export default function TransactionsTab() {

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
                        <TransactionCard />
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