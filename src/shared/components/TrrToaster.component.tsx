import { ToastStatus } from '@shared/enums/ToastStatus.enum';
import { Toast, useToastState } from '@tamagui/toast';
import { SizableText, YStack } from 'tamagui';

const statusColorMap: Record<ToastStatus, string> = {
  error: 'red',
  success: 'green',
  warning: 'yellow',
  info: 'blue',
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
      // TODO@themes: Set style based on status (error, success, warning, info) and default to primary
      backgroundColor={statusColorMap[currentToast.status] || 'white'}
    >
      <YStack>
        <Toast.Title>{currentToast.title}</Toast.Title>

        {!!currentToast.message && (
          <Toast.Description>
            <SizableText size="$2">{currentToast.message}</SizableText>
          </Toast.Description>
        )}
      </YStack>
    </Toast>
  );
}
