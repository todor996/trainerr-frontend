import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';

interface ClientsProps {}

export default function Clients(props: ClientsProps): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'clients/trainer', namespace: 'clients' });

  const { t } = useTranslation();

  console.log({ props });

  return (
    <div className="flex">
      <Sidenav />
      <div>Hello from ClientsComponent & {t('clients:title')}!</div>
    </div>
  );
}
