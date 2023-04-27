import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../buttons/Button";

export default function MembersCardCount() {
    return (
      <div className="card w-full bg-[#191B1E] text-neutral-content">
        <div className="flex h-full w-full flex-col space-y-2.5 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-2.5">
            <h2 className="card-title text-white">10 Members</h2>
            <p className="font-semibold text-white">Wallet based</p>
          </div>
          <div>
            <Button
              text="Manage Members"
              icon={<></>}
              clickFunction={() => {
                console.log("Clicked");
              }}
            />
          </div>
        </div>
      </div>
    );
}