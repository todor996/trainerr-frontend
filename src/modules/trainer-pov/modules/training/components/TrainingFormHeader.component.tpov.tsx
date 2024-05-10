import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button } from 'tamagui';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface TrainingFormHeaderProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

export function TrainingFormHeader({
  className,
  text,
  children,
}: TrainingFormHeaderProps): JSX.Element {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      className={twMerge(
        'flex flex-row items-center justify-between bg-base-100',
        className,
      )}
    >
      {/* LEFT */}
      <div className="-ml-2 flex w-full flex-row items-center">
        <Button className="size-8 p-0" color="ghost" size="sm" onPress={goBack}>
          <TrrIcon icon={faChevronLeft} size={16} />
        </Button>
        <span className="text-xl font-medium">{text}</span>
      </div>

      {/* TODO: Think of connecting PlanForm - <form> and this <form>  */}
      {/* RIGHT */}
      <div className="items-center-justify-end flex flex-row space-x-2">{children}</div>
    </div>
  );
}
