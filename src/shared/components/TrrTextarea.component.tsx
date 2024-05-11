import { forwardRef } from 'react';
import { Label, SizableText, TextArea, TextAreaProps, YStack } from 'tamagui';

interface TrrTextareaProps extends TextAreaProps {
  name?: string;
  label?: string;
  error?: string;
}

export const TrrTextarea = forwardRef<HTMLTextAreaElement, TrrTextareaProps>(
  (props, ref) => {
    const { placeholder, autoComplete, label, size, error, ...otherProps } = props;

    const customSize = size || '$4';

    return (
      <Label>
        <YStack flex={1}>
          {label && (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <SizableText marginBottom="$1.5" size={customSize as any}>
              {label}
            </SizableText>
          )}

          <TextArea
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            className={`${error && 'border-error'}`}
            autoComplete={autoComplete}
            placeholder={placeholder}
            {...otherProps}
          />

          {/* Using `<></>` so we can avoid React Native - "Unexpected text node: . A text node cannot be a child of a <View>" error */}
          <>
            {error && (
              // TODO@theme: Use error when theme is ready
              <SizableText color="red" size="$2" marginTop="$1.5">
                {error}
              </SizableText>
            )}
          </>
        </YStack>
      </Label>
    );
  },
);
