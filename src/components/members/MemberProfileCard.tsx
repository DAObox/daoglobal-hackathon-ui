import Image from "next/legacy/image";
import Button from "./Button";

export default function MemberProfileCard() {
    return(
        <div className="card w-full bg-secondary text-neutral-content">
            <div className="px-8 py-8 w-full h-full flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2.5 sm:space-y-0">
                <div className="space-y-2.5">
                    <div className="flex items-center space-x-3 w-full">
                        <div className="w-10 h-10 relative shrink-0">
                            <Image src={"/profile.png"} layout="fill" alt="image" />
                        </div>
                        <h2 className="card-title text-white">Okhai.eth</h2>
                    </div>
                    <p className="font-semibold text-white">Wallet based</p>
                </div>
                <div>
                    <Button text="Manage Members" clickFunction={() => {
                        console.log("Clicked");
                    }} />
                </div>
            </div>
        </div>
    )
}