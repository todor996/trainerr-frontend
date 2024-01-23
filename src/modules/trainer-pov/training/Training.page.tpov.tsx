import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { Outlet } from 'react-router-dom';

export default function TrainingPage(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'trainer-pov/training', namespace: 'training' });

  return (
    <div className="flex">
      <Sidenav />
      <main>
        {/* TODO: Place Header here */}
        <Outlet />
      </main>
    </div>
  );
}
