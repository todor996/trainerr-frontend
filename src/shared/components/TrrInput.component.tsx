import { LegacyRef, ReactNode, forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Input, InputProps, Label, SizableText, styled } from 'tamagui';

export interface TrrInputProps extends InputProps {
  type?: string;
  name?: string;
  label?: string;
  error?: string | boolean;
  children?: ReactNode;
}

const TrrInputUnstyled = forwardRef((props: TrrInputProps, ref: LegacyRef<TextInput>) => {
  const {
    label,
    error,
    size,
    placeholder,
    // autoComplete,
    ...otherProps
  } = props;

  const customSize = size || '$4';

  return (
    <div className="w-full">
      {label && (
        <Label>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <SizableText marginBottom="$1.5" size={customSize as any}>
            {label}
          </SizableText>
        </Label>
      )}

      <Input
        ref={ref}
        flex={1}
        width="100%"
        size={customSize}
        // bordered={true}
        placeholder={placeholder}
        {...otherProps}
      />

      {/* Using `<></>` so we can avoid React Native - "Unexpected text node: . A text node cannot be a child of a <View>" error */}
      <>
        {error && (
          <SizableText color="$error" size="$2" marginTop="$1.5" fontWeight="500">
            {typeof error === 'boolean' ? 'Error' : error}
          </SizableText>
        )}
      </>
    </div>
  );
});

// TODO: Test if this works properly
export const TrrInput = styled(TrrInputUnstyled, {});
