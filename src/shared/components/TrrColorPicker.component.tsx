import { getHexColor } from '@shared/utils/getColor.util';
import { formatHex } from 'culori';
import { Theme } from 'daisyui';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { generateColors } from './generateColors.util';
import { Input, InputProps } from 'tamagui';

interface TrrColorPickerProps extends InputProps {
  type?: string;
  name?: string;
  value: string;
  className?: string;
  // TODO: Fix this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: Theme | any;
  label?: string;
  placeholder?: string;
}

export function TrrColorPicker(props: TrrColorPickerProps): JSX.Element {
  const {
    value,
    className = '',
    label = '',
    theme,
    placeholder = '#hexvalue',
    ...otherProps
  } = props;
  const inputColorRef = useRef<HTMLInputElement>(null);

  const [color, setColor] = useState(getHexColor({ color: value, theme }));
  const [bgColor, setBgColor] = useState<string>();

  const sideCount = useRef(5);

  // const [colorListHsl, setColorHslList] = useState<string[]>([]);
  const [colorListRgb, setColorRgbList] = useState<string[]>([]);

  useEffect(() => {
    if (!color) {
      return;
    }

    // const hslColors = generateColorsHsl(color);
    const rgbColors = generateColors({
      color: color,
      lightCount: sideCount.current,
      darkCount: sideCount.current,
    });

    // setColorHslList(hslColors);
    setColorRgbList(rgbColors);
    setBgColor(rgbColors[0]);
  }, [color]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  function handleButtonClick() {
    inputColorRef.current?.click();
  }

  // TODO: Think of more elegant solution for color picker
  function ColorBox({
    color,
    bgColor,
    theme,
    isPrimary,
  }: {
    color: string;
    bgColor?: string;
    theme?: Theme;
    isPrimary?: boolean;
  }): JSX.Element {
    const btnRef = useRef<HTMLButtonElement>(null);

    // E0E7FF
    // e2e0fb
    const formattedColor = getHexColor({ color, theme });

    const isHex = formattedColor?.charAt(0) === '#';

    const calcHexColor = isHex ? formattedColor : '';
    const calcBgColor = !isHex ? `bg-${formattedColor}` : '';

    setTimeout(() => {
      if (!calcBgColor) {
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
      <div
        className={
          'flex flex-col content-start items-center' + (isPrimary ? ' -mt-9' : '')
        }
      >
        {isPrimary && (
          <span
            className="mb-1 flex items-center justify-center text-center"
            style={{
              backgroundColor: bgColor,
              color: color,
              border: `1px solid ${color}`,
              borderRadius: '50px',
              width: '100%',
              height: '100%',
              fontWeight: '500',
            }}
          >
            P
          </span>
        )}
        <button
          className={`btn h-8 min-h-0 w-8 shadow ${calcBgColor}`}
          ref={btnRef}
          type="button"
          style={{
            backgroundColor: isHex ? calcHexColor : '',
          }}
          onClick={handleButtonClick}
        ></button>
      </div>
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
          {...otherProps}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={handleChange as any}
        />
      </div>

      <div>
        RGB
        <div className="flex flex-row flex-wrap justify-start gap-1">
          {colorListRgb.length &&
            colorListRgb.map(
              (col, i) =>
                col && (
                  <ColorBox
                    key={i}
                    color={col}
                    bgColor={bgColor}
                    theme={theme}
                    isPrimary={i === sideCount.current}
                  />
                ),
            )}
        </div>
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
