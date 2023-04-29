import TokenIcon from "@components/icons/token";
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
                            <div><TokenIcon /></div>
                            <div className="w-full flex justify-between">
                                <div>
                                    <p className="font-semibold space-x-1.5">
                                        <span>USD Coin</span>
                                        <span><div className="badge badge-gray-200">100%</div></span>
                                    </p>
                                    <p className="text-sm flex space-x-1.5">
                                        <span>100k usdc </span>
                                        <span className="h-full flex flex-col items-center justify-center">
                                            <div className="h-1.5 w-1.5 bg-gray-200 mt-1.5 rounded-full" />
                                        </span>
                                        <span> $1.00</span>
                                    </p>
                                </div>
                                <div className="w-fit space-x-1.5 flex">
                                    <div className="w-fit h-full flex space-x-2">
                                        <div>
                                            <p className="font-semibold">$100,200.00</p>
                                            <p className="text-sm flex space-x-1.5">
                                                <span>+107.71</span>
                                                <span><div className="badge badge-success text-base-100">+0.11%</div></span>
                                            </p>
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