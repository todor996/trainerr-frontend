import { Header } from '@modules/trainer-pov/components/Header.component.tpov';
import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { Outlet } from 'react-router-dom';

export default function TrainingPage(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/training',
    namespace: 'training',
  });

  return (
    <div className="flex">
      <Sidenav />
      <main className="flex w-full flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
