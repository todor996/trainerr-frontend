import { Header } from '@modules/trainer-pov/components/Header.component.tpov';
import { TrrSidenav } from '@shared/components/TrrSidenav.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Main } from 'tamagui';

export default function Clients(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/clients',
    namespace: 'clients',
    pov: 'tpov',
  });

  const { t } = useTranslation();

  return (
    <div className="flex">
      <TrrSidenav />
      <Main display="flex" flexDirection="column" flexShrink={1} width="100%">
        <Header />
        <div>Hello from ClientsComponent & {t('clients:title')}!</div>
        <Outlet />
      </Main>
    </div>
  );
}
