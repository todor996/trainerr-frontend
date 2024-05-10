import React from 'react';
import { Input, InputProps, Label, SizableText, YStack, styled } from 'tamagui';

interface TrrInputProps extends InputProps {
  type?: string;
  name?: string;
  label?: string;
  error?: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrrInputPrivate = React.forwardRef((props: TrrInputProps, ref) => {
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
    <Label>
      <YStack flex={1}>
        {label && (
          <span className="mb-1 text-sm">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <SizableText size={customSize as any}>{label}</SizableText>
          </span>
        )}
        {/* Using `<></>` so we can avoid React Native - "Unexpected text node: . A text node cannot be a child of a <View>" error */}
        <>
          <Input
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            size={customSize}
            // bordered={true}
            placeholder={placeholder}
            {...otherProps}
          />
          {error && <span className={`label-text-alt mt-1 text-error`}>{error}</span>}
        </>
      </YStack>
    </Label>
  );
});

// TODO: Test if this works properly
export const TrrInput = styled(TrrInputPrivate, {
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // Set the width to 100%
  //   width: '100%',
  // },
  // innerElement: {
  //   // Set the width to 100%
  //   width: '100%',
  //   height: 50, // Set your desired height
  //   backgroundColor: 'blue',
  // },
});
