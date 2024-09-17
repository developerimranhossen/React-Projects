import Field from "../Field";
import FieldSet from "../FieldSet";
import { useForm } from "react-hook-form";
function LoginForm() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", {required: 'Email is Required.'})}
              className={`p-2 border box-border w-[300px] rounded-md ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password",{required: 'Email is Required.',
            minLength: {
                value: 8,
                message: 'Your password must be at least 8 characters'
            }})}
              className={`p-2 border box-border w-[300px] rounded-md ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </Field>
        </FieldSet>
        <Field>
          <button className="text-sm text-white cursor-pointer p-1 border rounded-lg bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}

export default LoginForm;
