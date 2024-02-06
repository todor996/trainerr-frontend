import { getHexColor } from '@shared/utils/getColor.util';
import { formatHex } from 'culori';
import { Theme } from 'daisyui';
import { useRef, useState } from 'react';
import { Input } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

interface TrrColorPickerProps {
  value: string;
  className?: string;
  theme?: Theme;
  label?: string;
  placeholder?: string;
}

export function TrrColorPicker({
  value,
  className = '',
  label = '',
  theme,
  placeholder = '#hexvalue',
}: TrrColorPickerProps): JSX.Element {
  const inputColorRef = useRef<HTMLInputElement>(null);

  const [color, setColor] = useState(getHexColor({ color: value, theme }));

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  function handleButtonClick() {
    inputColorRef.current?.click();
  }

  // TODO: Think of more elegant solution for color picker
  function ColorBox({ color, theme }: { color: string; theme?: Theme }): JSX.Element {
    const btnRef = useRef<HTMLButtonElement>(null);
    const formattedColor = getHexColor({ color, theme });

    const isHex = formattedColor?.charAt(0) === '#';

    const hexColor = isHex ? formattedColor : '';
    const bgColor = !isHex ? `bg-${formattedColor}` : '';

    setTimeout(() => {
      if (!bgColor) {
        return;
      }

      if (!btnRef.current) {
        return;
      }

      const style = window.getComputedStyle(btnRef.current as Element);
      const styleColor = formatHex(style.backgroundColor);

      inputColorRef.current!.value = styleColor!;
      btnRef.current.style.backgroundColor = styleColor!;
    });

    return (
      <button
        className={`btn h-8 min-h-0 w-8 shadow ${bgColor}`}
        ref={btnRef}
        type="button"
        style={{
          backgroundColor: isHex ? hexColor : '',
        }}
        onClick={handleButtonClick}
      ></button>
    );
  }

  return (
    <label className={twMerge('flex flex-col gap-2', className)}>
      {/* LABEL */}
      <span>{label}</span>

      {/* INPUT */}
      <div className="flex flex-row items-center gap-2">
        <ColorBox color={color} theme={theme} />

        <Input
          className="w-full"
          value={color}
          size="sm"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>

      {/* HIDDEN INPUT - But exists because of functionality */}
      <input
        className="h-0 w-0 bg-transparent opacity-0"
        ref={inputColorRef}
        placeholder={placeholder}
        type="color"
        value={getHexColor({ color, theme })}
        onChange={handleChange}
      />
    </label>
  );
}
