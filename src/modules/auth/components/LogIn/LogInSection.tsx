import { FormLogIn } from './FormLogIn.component';

export function LogInSection(): JSX.Element {
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col py-6 lg:w-1/2">
        <FormLogIn />

        <label className="label">
          <span className="label-text">
            You don't have an account?
            <a href="#" className="cursor-pointer text-primary">
              {' '}
              Sign Up here
            </a>
            .
          </span>
        </label>
      </div>
    </div>
  );
}
