import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"

export default function TreasuryTabs() {
    const [tab, setTab] = useLocalStorage("tab", "tokens")
    return(
        <div className="flex space-x-2.5">
            <button
                className={`hover:underline hover:underline-offset-4 hover:decoration-daoboxg decoration-4 font-semibold 
                ${tab == "tokens" && "underline underline-offset-4 decoration-daoboxg decoration-4"}`}
                onClick={() => setTab("tokens")}>Tokens</button>
            <button
                className={`hover:underline hover:underline-offset-4 hover:decoration-daoboxg decoration-4 font-semibold 
                ${tab == "transactions" && "underline underline-offset-4 decoration-daoboxg decoration-4"}`}
                onClick={() => setTab("transactions")}>Transactions</button>
        </div>
    )
}