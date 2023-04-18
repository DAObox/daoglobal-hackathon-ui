import { ArrowRightIcon, IdentificationIcon } from "@heroicons/react/24/outline"
import Image from "next/legacy/image"
import Link from "next/link"
import { truncateAddress } from "../../utils/addresses"
import { MemberCardTypes } from "types/typings"

export default function MemberCard({ avatar, address, balance, power }: MemberCardTypes) {
    return(
        <div className="card w-full bg-secondary text-neutral-content">
            <div className="card-body items-center text-center space-y-1">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center space-x-3 w-full">
                        <div className="w-10 h-10 relative shrink-0">
                            <Image src={avatar} layout="fill" alt="Profile image" />
                        </div>
                        <h2 className="card-title max-w-full truncate text-white">{truncateAddress(address)}</h2>
                    </div>
                    <div>
                        <IdentificationIcon className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="w-full space-y-2.5">
                    <div className="flex space-x-2 items-center justify-start w-full">
                        <div className="w-4 h-4 relative">
                            <Image src={"/bal-light.png"} layout="fill" alt="image" />
                        </div>
                        <p className="text-start text-white">Token balance: {balance}</p>
                    </div>
                    <div className="flex space-x-2 items-center justify-start w-full">
                        <div className="w-4 h-4 relative">
                            <Image src={"/voting-power-light.png"} layout="fill" alt="image" />
                        </div>
                        <p className="text-start text-white">Voting power: {power}</p>
                    </div>
                    <Link href={"/members/member"} className="flex items-center justify-start space-x-0.5 max-w-fit">
                        <div>
                            <p className="text-sm text-start text-daoboxg">View member profile</p>
                        </div>
                        <div>
                            <ArrowRightIcon className="w-4 h-4 text-daoboxg" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}