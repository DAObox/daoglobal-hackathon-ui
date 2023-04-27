import { getWindow } from "@lib/window"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function TreasuryTabs() {
    const router = useRouter()
    const [tab, setTab] = useState(null)
    const params = new URLSearchParams()
    console.log(getWindow()?.location.search)
    return(
        <div className="flex space-x-2.5">
            <button
                className={`hover:underline hover:underline-offset-4 hover:decoration-daoboxg decoration-4 font-semibold 
                ${getWindow()?.location.search == "?tab=tokens" && "decoration-daoboxg"}`} onClick={() => router.push("?tab=tokens")}>Tokens</button>
            <button
                className={`hover:underline hover:underline-offset-4 hover:decoration-daoboxg decoration-4 font-semibold
                ${getWindow()?.location.search == "?tab=transactions" && "decoration-daoboxg"}`} onClick={() => router.push("?tab=transactions")}>Transactions</button>
        </div>
    )
}