import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../buttons/Button";

export default function CreateProposalCard() {
    return (
      <div className="card w-full bg-[#191B1E] text-neutral-content">
        <div className="flex h-full w-full flex-col space-y-2.5 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex-1">
            <p className="card-title text-white">$100,200.00</p>
          </div>
          <div>
            <Button
              text="Manage Members"
              icon={<PlusIcon className="w-6 h-6" />}
              clickFunction={() => {
                console.log("Clicked");
              }}
            />
          </div>
        </div>
      </div>
    );
}