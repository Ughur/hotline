import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface Option {
  id: string;
  value: string;
  label: string;
}

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  options: Option[];
  register: UseFormRegister<T>;
  error?: string;
  required?: boolean;
  selectedValue?: string;
  onOptionSelect?: (value: string) => void;
}

const RadioButtonGroup = <T extends FieldValues>({
  id,
  label,
  options,
  register,
  error,
  required = false,
  selectedValue,
  onOptionSelect,
}: Props<T>) => {
  return (
    <div>
      <label htmlFor={id}>
        {label} {required && <span className="text-primary-600">*</span>}
      </label>
      <div className="max-md:space-y-2 md:flex gap-5 mt-2">
        {options.map((option) => (
          <div
            key={option.id}
            className={`form__radio ${
              selectedValue === option.value
                ? "bg-primary-200 border-primary-600"
                : ""
            }`}
          >
            <input
              type="radio"
              id={option.id}
              value={option.value}
              {...register(id)}
              onFocus={() => onOptionSelect?.(option.value)}
            />
            <label htmlFor={option.id} className="w-full cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <span className="text-red mt-2 block">{error}</span>}
    </div>
  );
};

export default RadioButtonGroup;
