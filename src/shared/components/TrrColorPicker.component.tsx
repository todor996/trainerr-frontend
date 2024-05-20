import { callLast } from '@shared/utils/callLast.util';
import { formatHex } from 'culori';
import { ChangeEvent, LegacyRef, forwardRef, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Button, Input, InputProps, SizableText, ThemeName, styled } from 'tamagui';

interface TrrColorPickerProps extends InputProps {
  type?: string;
  name?: string;
  value: string;
  className?: string;
  // TODO: Fix this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: ThemeName;
  label?: string;
  placeholder?: string;
  error?: string | boolean;
  onChangeColor?: (value: string) => void;
}

const TrrColorPickerUnstyled = forwardRef(
  (props: TrrColorPickerProps, ref: LegacyRef<TextInput>) => {
    const {
      id,
      name,
      error,
      value,
      className = '',
      label = '',
      theme,
      placeholder = '#hexvalue',
      ...otherProps
    } = props;
    const inputColorRef = useRef<HTMLInputElement>(null);

    const [color, setColor] = useState(formatHex(value));

    // TODO: Remove culori package if you are not using it!

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setColor(event.target.value);
      event.target.name = name;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props.onChange(event as any);
    }

    const handleOnChangeHidden = callLast(_handleOnChangeHidden, 300);

    function _handleOnChangeHidden(event: ChangeEvent<HTMLInputElement>, value: string) {
      setColor(value);
      event.target.value = value;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props.onChange(event as any);
    }

    function handleButtonClick() {
      inputColorRef.current?.click();
    }

    return (
      <label className={twMerge('flex flex-col gap-2', className)}>
        {/* LABEL */}
        <span>{label}</span>

        {/* INPUT */}
        <div className="flex flex-row items-center gap-2">
          <Button
            className={`shadow`}
            theme={theme}
            height={'44px'}
            width={'44px'}
            padding={'0'}
            backgroundColor={color}
            fontSize={'$2'}
            onPress={handleButtonClick}
          ></Button>

          <Input
            className="shadow"
            ref={ref}
            id={id}
            type="color"
            value={color}
            placeholder={placeholder}
            {...otherProps}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(event) => handleChange(event as any)}
          />
        </div>

        <>
          {error && (
            <SizableText color="$error" size="$2" marginTop="$1.5">
              {typeof error === 'boolean' ? 'Error' : error}
            </SizableText>
          )}
        </>

        {/* HIDDEN INPUT - But exists because of functionality */}
        <input
          className="h-0 w-0 bg-transparent opacity-0"
          ref={inputColorRef}
          name={name}
          placeholder={placeholder}
          type="color"
          value={color}
          onChange={(event) => {
            handleOnChangeHidden(event, event.target.value);
          }}
        />
      </label>
    );
  },
);

export const TrrColorPicker = styled(TrrColorPickerUnstyled, {
  width: '100%',
});
