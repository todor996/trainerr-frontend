import { Input } from './Input';

export const SignUp = () => {
  return (
    <section className="m-3">
      <h4 className="flex justify-center pt-8 text-2xl">trainerr</h4>
      <h2 className="py-6 text-4xl">Sign Up</h2>

      <Input type="text" placeholder="First Name" />

      <Input type="text" placeholder="Last Name" />

      <Input type="date" placeholder="Birthday" />

      <Input type="number" placeholder="Mobile number or email address" />

      <Input type="password" placeholder="Password" />

      <label className="label flex justify-start gap-2">
        <input type="checkbox" className="checkbox" />
        <span className="label-text">
          Yes, I accept{' '}
          <span className="cursor-pointer text-blue-500">privice policy</span> &{' '}
          <span className="cursor-pointer text-blue-500">terms of use</span>.
        </span>
      </label>

      <div className="grid grid-cols-2 justify-between gap-3 pt-6">
        <button className="btn btn-neutral btn-active w-full">Cancel</button>
        <button className="btn btn-primary btn-active w-full bg-indigo-600">
          Sign Up
        </button>
      </div>

      <p className="pt-8">
        You already have an account?{' '}
        <span className="cursor-pointer text-purple-600">Log In</span>
      </p>
    </section>
  );
};
