import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

interface ClientsProps {}

export default function Clients(props: ClientsProps): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/clients',
    namespace: 'clients',
    pov: 'tpov',
  });

  const { t } = useTranslation();

  console.log({ props });

  return (
    <div className="flex">
      <Sidenav />
      <main>
        {/* TODO: Place Header here */}
        <div>Hello from ClientsComponent & {t('clients:title')}!</div>
        <Outlet />
      </main>
    </div>
  );
}
