import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { SizableText, XStack, styled } from 'tamagui';
import { useNavigate } from 'react-router-dom';
import { TrrButton } from '@shared/components/TrrButton.component';

interface FormHeaderProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

function FormHeaderUnstyled(props: FormHeaderProps): JSX.Element {
  const { text, children, ...otherProps } = props;
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <XStack
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="$base-100"
      paddingHorizontal="24px"
      paddingVertical="12px"
      {...otherProps}
    >
      {/* LEFT */}
      <XStack marginLeft="-2px" alignItems="center">
        <TrrButton size="$3" onPress={goBack}>
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
}

export const FormHeader = styled(FormHeaderUnstyled, {});
