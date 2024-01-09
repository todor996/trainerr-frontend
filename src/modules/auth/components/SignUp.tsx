import { Input } from './Input';
import { Button } from './Button';

export function SignUp(): JSX.Element {
  return (
    <section className="m-3">
      <h4 className="flex justify-center pt-8 text-2xl">trainerr</h4>
      <h2 className="py-6 text-4xl">Sign Up</h2>
      <form className="flex flex-col space-y-2">
        <Input type="text" placeholder="First Name" />

        <Input type="text" placeholder="Last Name" />

        <Input type="date" placeholder="Birthday" />

        <Input
          type="email"
          placeholder="Email address"
          autoComplete="current-email"
          required={true}
        />

        <Input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required={true}
        />
      </form>

      <label className="label flex justify-start gap-2">
        <input type="checkbox" className="checkbox" />
        <span className="label-text">
          Yes, I accept <span className="cursor-pointer">privice policy</span> &{' '}
          <span className="cursor-pointer">terms of use</span>.
        </span>
      </label>

      <div className="grid grid-cols-2 justify-between gap-3 pt-6">
        <Button>Cancel</Button>
        <Button className="btn-primary">Sign Up</Button>
      </div>

      <p className="pt-8">
        You already have an account?{' '}
        <a href="#" className="cursor-pointer text-primary">
          Log In
        </a>
      </p>
    </section>
  );
}
