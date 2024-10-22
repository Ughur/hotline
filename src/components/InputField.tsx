import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  id: Path<T>;
  type?: string;
  label: string;
}
const InputField = <T extends FieldValues>({
  register,
  errors,
  id,
  type = "text",
  label,
}: Props<T>) => {
  return (
    <div>
      <label htmlFor={id}>
        {label} <span className="text-primary-600">*</span>
      </label>
      <input
        className={errors[id] ? "form__input border-red" : "form__input"}
        id={id}
        type={type}
        {...register(id)}
      />
      {errors[id] && (
        <span className="mt-2 block text-red">
          {errors[id]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default InputField;
