/* import { useFormContext } from "react-hook-form";

export const Input = ({ label, type, id, placeholder }) => {
  const { register } = useFormContext();

  return (
    <div className="container">
      <div className="row-6">
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(label, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
    </div>
  );
}; */
