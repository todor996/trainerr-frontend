import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TrrButton } from '@shared/components/TrrButton.component';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Group } from 'tamagui';

interface PlansHeaderProps {
  className?: string;
}

export function PlansHeader({ className }: PlansHeaderProps): JSX.Element {
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
      {/* TODO: Handle this form */}
      {/* TODO: Maybe remove Search Form for MVP */}
      <form className="w-full" onSubmit={handleSubmit}>
        <Group className="w-full lg:max-w-[376px]" orientation="horizontal">
          <Group.Item>
            <TrrInput
              className="join-item w-96 grow"
              size="$3"
              type="text"
              placeholder="Search for a plan"
              borderRightWidth={0}
            />
          </Group.Item>
          <Group.Item>
            <TrrButton
              className="join-item border-l-0 border-base-content border-opacity-20"
              size="$3"
              variant="outlined"
              color="ghost"
              borderLeftWidth={0}
              borderWidth={1}
            >
              <TrrIcon icon={faMagnifyingGlass} size={16} />
            </TrrButton>
          </Group.Item>
        </Group>
      </form>

      {/* RIGHT */}
      <Link to={'/trainer/training/plans/form'}>
        <TrrButton
          // className="shadow"
          minWidth="192px"
          size="$3"
          themeColor="$primary"
        >
          Add Plan
        </TrrButton>
      </Link>
    </div>
  );
}
