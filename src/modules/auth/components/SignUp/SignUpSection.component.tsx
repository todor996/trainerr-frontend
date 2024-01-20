import { FormSignUp } from './FormSignUp.component.component';

export function SignUpSection(): JSX.Element {
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col justify-between py-6 lg:w-1/2">
        <FormSignUp />

        <label className="label">
          <span className="label-text">
            You already have an account?{' '}
            <a href="#" className="cursor-pointer text-primary">
              Log In
            </a>
          </span>
        </label>
      </div>
    </div>
  );
}
