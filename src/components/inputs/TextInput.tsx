import classNames from "classnames";
import { type UseFormRegister } from "react-hook-form";
import { CreateProposalDetail } from "types";

export type AllowedFormData = CreateProposalDetail | any;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<AllowedFormData>;
  label: string;
  name: string;
  inputClass?: string;
  hasError?: string;
}

export const TextInput: React.FC<Props> = ({
  label,
  hasError,
  register,
  name,
  inputClass,
  ...props
}) => {
  return (
    <div className="form-control w-full">
      {!!label && (
        <label className="label">
          <span className="label-text font-semibold">{label}</span>
        </label>
      )}
      <input
        className={classNames(
          "input-bordered input-accent input w-full",

          inputClass
        )}
        {...register(name)}
        {...props}
      />
      {hasError && (
        <label className="label">
          <span className="label-text-alt text-error">{hasError}</span>
        </label>
      )}
    </div>
  );
};
