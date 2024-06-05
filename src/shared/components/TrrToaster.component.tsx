import { ToastStatus } from '@shared/enums/ToastStatus.enum';
import { Toast, useToastState } from '@tamagui/toast';
import { SizableText, XStack, YStack } from 'tamagui';
import { TrrIcon } from './TrrIcon.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const statusColorMap: Record<ToastStatus, string> = {
  error: '$error',
  success: '$success',
  warning: '$warning',
  info: '$info',
};

export function TrrToaster(): JSX.Element {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) {
    return null;
  }

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={24}
      opacity={1}
      scale={1}
      viewportName={currentToast.viewportName}
      backgroundColor={statusColorMap[currentToast.status] || '$primary'}
      minWidth="$16"
      {...{ color: `${statusColorMap[currentToast.status]}-contrast` || '$primary' }}
    >
      <YStack>
        <XStack alignItems="center" justifyContent="space-between">
          <Toast.Title fontWeight={500}>{currentToast.title}</Toast.Title>
          <Toast.Close>
            <TrrIcon size={16} icon={faXmark} />
          </Toast.Close>
        </XStack>

        {!!currentToast.message && (
          <Toast.Description>
            <SizableText size="$3">{currentToast.message}</SizableText>
          </Toast.Description>
        )}
      </YStack>
    </Toast>
  );
}
