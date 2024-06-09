import { ColorName } from '@shared/services/Color.service';
import { LegacyRef, forwardRef } from 'react';
import { Button, ButtonProps, TamaguiElement } from 'tamagui';

interface TrrButtonProps extends ButtonProps {
  themeColor?: ColorName;
}
/**
 * TODO: Handle outline and ghost variants
 */
export const TrrButton = forwardRef(
  (props: TrrButtonProps, ref: LegacyRef<TamaguiElement>): JSX.Element => {
    const { themeColor, ...otherProps } = props;

    // const variantStyles = {
    //   "" : {

    //   }
    // }

    return (
      <Button
        ref={ref}
        color={`${themeColor}-contrast`}
        backgroundColor={`${themeColor}`}
        hoverStyle={{
          backgroundColor: `${themeColor}-400`,
          borderColor: `${themeColor}-contrast`,
        }}
        disabledStyle={{
          backgroundColor: `${themeColor}-100`,
          borderColor: `${themeColor}-400`,
        }}
        {...otherProps}
      >
        {props.children}
      </Button>
    );
  },
);
