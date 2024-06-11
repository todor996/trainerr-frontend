import { ColorName } from '@shared/services/Color.service';
import { LegacyRef, forwardRef } from 'react';
import { Button, ButtonProps, TamaguiElement } from 'tamagui';

type TrrButtonVariant = 'solid' | 'outline' | 'ghost';

interface TrrButtonProps extends ButtonProps {
  themeColor?: ColorName;
  themeVariant?: TrrButtonVariant;
}

/**
 * TODO: Handle outline and ghost variants
 */
export const TrrButton = forwardRef(
  (props: TrrButtonProps, ref: LegacyRef<TamaguiElement>): JSX.Element => {
    const { themeColor = '$base', themeVariant, ...otherProps } = props;

    const variantStyles = {
      solid: {
        color: `${themeColor}-contrast`,
        backgroundColor: `${themeColor}`,
        borderColor: `${themeColor}`,
        hoverStyle: {
          backgroundColor: `${themeColor}-500`,
          borderColor: `${themeColor}`,
        },
        disabledStyle: {
          backgroundColor: `${themeColor}-400`,
          borderColor: `${themeColor}-400`,
          cursor: 'not-allowed',
        },
      },
      outline: {
        color: `${themeColor}`,
        backgroundColor: `transparent`,
        borderColor: `${themeColor}`,
        hoverStyle: {
          backgroundColor: `${themeColor}-100`,
          borderColor: `${themeColor}`,
        },
        disabledStyle: {
          color: `${themeColor}-400`,
          borderColor: `${themeColor}-400`,
          cursor: 'not-allowed',
        },
      },
      ghost: {
        color: `${themeColor}-contrast`,
        backgroundColor: `transparent`,
        borderColor: `transparent`,
        hoverStyle: {
          backgroundColor: `${themeColor}-200`,
          borderColor: `transparent`,
        },
        disabledStyle: {
          color: `${themeColor}-contrast`,
          backgroundColor: `$base-100`,
          cursor: 'not-allowed',
        },
      },
    };

    const themeStyle = variantStyles[themeVariant ?? 'solid'];

    return (
      <Button ref={ref} {...themeStyle} {...otherProps}>
        {props.children}
      </Button>
    );
  },
);
