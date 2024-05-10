import { ChangeEvent } from 'react';
import { VisuallyHidden } from 'tamagui';

interface TrrUploadProps {
  children?: JSX.Element | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TrrUpload(props: TrrUploadProps): JSX.Element {
  const { children, onChange } = props;

  return (
    <label className="w-fit cursor-pointer">
      {children || 'Upload'}

      <VisuallyHidden>
        <input type="file" onChange={onChange}></input>
      </VisuallyHidden>
    </label>
  );
}
