import { Sidenav } from '@shared/components/Sidenav.component';

export default function SubHomePage(): JSX.Element {
  return (
    <div className="flex">
      <Sidenav />
      <div>Hello from SubHomePage!</div>
    </div>
  );
}
