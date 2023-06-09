import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function InputSearch() {
    return(
        <div className="form-control w-full">
            <div className="input-group w-full">
                <input type="text" placeholder="Search…" className="input input-ghost bg-secondary w-full md:w-[500px] !outline-0 focus:border-none placeholder-primary px-8" />
                <button className="btn btn-square bg-secondary border-secondary hover:bg-secondary hover:border-secondary">
                    <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
                </button>
            </div>
        </div>
    )
}