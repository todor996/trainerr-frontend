import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';

export default function TrainingPage(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'client-pov/modules/training',
    namespace: 'training',
  });
  return (
    <>
      <div>Hello from Training!</div>
    </>
  );
}
