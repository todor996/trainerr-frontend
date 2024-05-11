import { TrrInput, TrrInputProps } from './TrrInput.component';
import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { YStack } from 'tamagui';

interface TrrDatePickerProps extends ReactDatePickerProps {
  input: TrrInputProps;
  width?: string;
}

export function TrrDatePicker(props: TrrDatePickerProps): JSX.Element {
  const [startDate, setStartDate] = useState(new Date());

  function handleOnChange(date, event) {
    setStartDate(date);

    return props.onChange(date, event);
  }

  return (
    <YStack flex={1} width={props.width || '100%'}>
      <DatePicker
        {...{ type: 'date' }}
        selected={startDate}
        onChange={handleOnChange}
        customInput={<TrrInput {...props.input} />}
      />
    </YStack>
  );
}
