export function TermsComponent(): JSX.Element {
  return (
    <label className="label flex justify-start gap-2 pb-6 pt-4">
      <input type="checkbox" className="checkbox" />
      <span className="label-text">
        Yes, I accept <span className="cursor-pointer">privice policy</span> &{' '}
        <span className="cursor-pointer">terms of use</span>.
      </span>
    </label>
  );
}
