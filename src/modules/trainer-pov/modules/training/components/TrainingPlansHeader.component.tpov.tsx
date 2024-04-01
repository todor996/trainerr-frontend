import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button, Input, Join } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface TrainingPlansHeaderProps {
  className?: string;
}

export function TrainingPlansHeader({
  className,
}: TrainingPlansHeaderProps): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted');
  }

  return (
    <div
      className={twMerge(
        'flex flex-row items-center justify-between bg-base-100',
        className,
      )}
    >
      {/* LEFT */}
      <form className="w-full" onSubmit={handleSubmit}>
        <Join className="w-full lg:max-w-[376px]">
          <Input
            className="join-item w-96 grow"
            size="sm"
            type="text"
            placeholder="Search for a plan"
          />
          <Button
            className="join-item border-l-0 border-base-content border-opacity-20"
            type="submit"
            size="sm"
            variant="outline"
            color="ghost"
          >
            <TrrIcon icon={faMagnifyingGlass} size={16} />
          </Button>
        </Join>
      </form>

      {/* RIGHT */}
      <Link to={'/trainer/training/plans/form'}>
        <Button className="min-w-[192px] shadow" size="sm" color="primary">
          Add Plan
        </Button>
      </Link>
    </div>
  );
}
