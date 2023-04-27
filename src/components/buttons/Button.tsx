import { ButtonType } from "../../types/typings";

export default function Button({ text, icon, clickFunction }: ButtonType) {
    return(
        <button className="btn btn-xs btn-md remove-text-transform btn-success text-white w-full sm:w-auto space-x-0.5" 
        onClick={() => clickFunction()}>
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </button>
    )
}