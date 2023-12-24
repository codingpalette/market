import Input, {InputProps} from "@/app/_components/atoms/Input";

export interface FormInputProps extends InputProps {
  label?: string;
  isRequired?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export default function FromInput({ label, isRequired, isError, errorMessage, ...inputProps }: FormInputProps) {

  const formInputClass = `
    flex items-center justify-between gap-2 flex-wrap
  `;

  const errorClass = `
    text-xs text-red-500 mt-1
  `;

  return (
    <>
      <div>
        <label htmlFor={inputProps.id} className={formInputClass}>
          {label && <span>{label} {isRequired && <span className="text-red-500">*</span>}</span>}
          <Input {...inputProps} />
        </label>
        {isError && errorMessage && <p className={errorClass}>{errorMessage}</p>}

      </div>

    </>
  )
}
