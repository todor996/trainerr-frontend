import { ChangeEvent } from 'react';
import { Label, SizableText, VisuallyHidden, YStack } from 'tamagui';

interface TrrUploadProps {
  error?: string | boolean;
  children?: JSX.Element | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TrrUpload(props: TrrUploadProps): JSX.Element {
  const { children, onChange } = props;

  return (
    <Label className="w-fit cursor-pointer">
      <YStack cursor="pointer">
        {children || 'Upload'}

        {/* Using `<></>` so we can avoid React Native - "Unexpected text node: . A text node cannot be a child of a <View>" error */}
        <>
          {props.error && (
            <SizableText color="$error" size="$2" marginTop="$1.5" fontWeight="500">
              {typeof props.error === 'boolean' ? 'Error' : props.error}
            </SizableText>
          )}
        </>
      </YStack>

      <VisuallyHidden>
        <input type="file" onChange={onChange}></input>
      </VisuallyHidden>
    </Label>
  );
}
