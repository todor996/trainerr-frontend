export function HaveAccComponent(): JSX.Element {
  return (
    <div className="py-2">
      <p>
        You already have an account?{' '}
        <a href="#" className="cursor-pointer text-primary">
          Log In
        </a>
      </p>
    </div>
  );
}
