import { Header } from '@modules/trainer-pov/components/Header.component.tpov';
import { Sidenav } from '@shared/components/Sidenav.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export default function Clients(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/clients',
    namespace: 'clients',
    pov: 'tpov',
  });

  const { t } = useTranslation();

  return (
    <div className="flex">
      <Sidenav />
      <main className="w-full">
        <Header />
        <div>Hello from ClientsComponent & {t('clients:title')}!</div>
        <Outlet />
      </main>
    </div>
  );
}
