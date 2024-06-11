import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { SizableText, TamaguiElement, XStack, styled } from 'tamagui';
import { useNavigate } from 'react-router-dom';
import { TrrButton } from '@shared/components/TrrButton.component';
import { LegacyRef, forwardRef } from 'react';

interface FormHeaderProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const FormHeaderUnstyled = forwardRef(
  (props: FormHeaderProps, ref: LegacyRef<TamaguiElement>) => {
    const { text, children, ...otherProps } = props;
    const navigate = useNavigate();

    function goBack() {
      navigate(-1);
    }

    return (
      <XStack
        ref={ref}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="$base"
        paddingHorizontal="24px"
        paddingVertical="12px"
        {...otherProps}
      >
        {/* LEFT */}
        <XStack marginLeft="-2px" alignItems="center">
          <TrrButton size="$3" themeVariant="ghost" onPress={goBack}>
            <TrrIcon icon={faChevronLeft} size={16} />
          </TrrButton>
          <SizableText fontSize="20px" fontWeight="500">
            {text}
          </SizableText>
        </XStack>

        {/* TODO: Think of connecting PlanForm - <form> and this <form>  */}
        {/* RIGHT */}
        <XStack className="items-center-justify-end flex flex-row space-x-2">
          {children}
        </XStack>
      </XStack>
    );
  },
);

export const FormHeader = styled(FormHeaderUnstyled, {});
