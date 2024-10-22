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
  label: string;
}

const TextAreaField = <T extends FieldValues>({
  register,
  errors,
  id,
  label,
}: Props<T>) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2">
        {label} <span className="text-primary-600">*</span>
      </label>
      <textarea
        id="message"
        className={errors[id] ? "form__textarea border-red" : "form__textarea"}
        {...register(id)}
      ></textarea>
      {errors[id] && (
        <span className="text-red">{errors[id]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default TextAreaField;
