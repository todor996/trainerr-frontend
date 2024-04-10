import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, InputProps, Label, SizableText, YStack, styled } from 'tamagui';

interface TrrInputProps extends InputProps {
  label?: string;
  error?: string;
  registerProps?: UseFormRegisterReturn<string>;
}

export const TrrInputPrivate = React.forwardRef((props: TrrInputProps, ref) => {
  const {
    label,
    error,
    size,
    // type = 'text',
    placeholder,
    // autoComplete,
    registerProps,
    ...otherProps
  } = props;

  const customSize = size || '$4';

  return (
    // autoComplete={autoComplete}
    // type={type}o
    <Label>
      <YStack flex={1}>
        {label && (
          <span className="mb-1 text-sm">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <SizableText size={customSize as any}>{label}</SizableText>
          </span>
        )}
        <Input
          ref={ref}
          size={customSize}
          bordered={true}
          placeholder={placeholder}
          {...otherProps}
          {...registerProps}
        />
        {error && <span className={`label-text-alt mt-1 text-error`}>{error}</span>}
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
