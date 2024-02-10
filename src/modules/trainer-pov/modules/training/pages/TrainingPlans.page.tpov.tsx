import { faDumbbell, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Badge, Button, Drawer } from 'react-daisyui';
import { TrainingPlanCard } from '../components/TrainingPlanCard.component.tpov';
import { TrainingPlansHeader } from '../components/TrainingPlansHeader.component.tpov';
import { useCallback, useState } from 'react';
import { HeaderSmall } from '@modules/trainer-pov/components/HeaderSmall.component.tpov';
import { TrainingExerciseCard } from '../components/TrainingExerciseCard.component.tpov';

export default function TrainingPlansPage(): JSX.Element {
  function handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();

    console.log('clicked');
  }

  // function handleOnClickCard() {
  //   console.log('clicked card');
  // }

  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return (
    <div className="flex flex-col px-6">
      {/* HEADER */}
      <TrainingPlansHeader className="py-3" />

      {/* DRAWER */}
      <Drawer
        className="z-20"
        open={visible}
        onClickOverlay={toggleVisible}
        end={true}
        side={
          <div className="h-full w-[390px] space-y-4 bg-base-200 px-3 py-6 text-base-content">
            {/* HEADER */}
            <HeaderSmall
              title="Plan"
              Action={(defaultProps) => (
                <Button {...defaultProps} onClick={toggleVisible}>
                  <TrrIcon icon={faXmark} />
                </Button>
              )}
            />

            {/* TITLE */}
            <div className="align-center flex w-full flex-row justify-between">
              <h3 className="flex items-center text-xl font-medium">
                Snaga - Powerlifting
              </h3>

              {/* TODO: Think of creating TrrButtonIcon */}
              <Button
                className="size-8 p-0"
                color="ghost"
                size="sm"
                onClick={handleOnClick}
              >
                <TrrIcon icon={faEllipsis} />
              </Button>
            </div>

            {/* BODY */}
            {/* TODO: Set max height & add See More option  */}
            <p className="text-sm">
              Uz ovaj plan ce te doci do fit tela koje je spremno na sve! Uz ovaj plan ce
              te doci do fit tela koje je spremno na sve!
            </p>

            <div className="align-center flex w-full flex-row justify-between">
              {/* TODO: Add padding to this row because of the scroll */}
              {/* TODO: Fix spacing between elements */}
              {/* TABS */}
              <div className="mr-2 flex w-full flex-row items-center gap-1 overflow-x-scroll py-2">
                <Badge
                  className="shrink-0 grow cursor-pointer border border-primary-content text-sm font-medium"
                  color="primary"
                  size="lg"
                >
                  Training 1
                </Badge>
                <Badge
                  className="shrink-0 cursor-pointer text-sm font-medium hover:border  hover:border-primary-content"
                  size="lg"
                  color="ghost"
                >
                  Training 2
                </Badge>
                <Badge
                  className="shrink-0 cursor-pointer text-sm font-medium hover:border  hover:border-primary-content"
                  size="lg"
                  color="ghost"
                >
                  Training 3
                </Badge>
                <Badge
                  className="shrink-0 cursor-pointer text-sm font-medium"
                  size="lg"
                  color="ghost"
                >
                  Training 4
                </Badge>
              </div>

              {/* ACTION */}
              <Button
                className="size-8 p-0"
                color="ghost"
                size="sm"
                onClick={handleOnClick}
              >
                <TrrIcon icon={faEllipsis} />
              </Button>
            </div>

            {/* CARDS */}
            <TrainingExerciseCard
              title="Bench"
              description="The quick brown fox jumps over the lazy dog."
              imgSrc="https://cdn.muscleandstrength.com/sites/default/files/images/articles/articles/bench-press-5.jpg"
              Action={(defaultProps) => (
                <Button {...defaultProps} onClick={handleOnClick}>
                  <TrrIcon icon={faEllipsis} />
                </Button>
              )}
            />
            <TrainingExerciseCard
              title="Squat"
              description="The quick brown fox jumps over the lazy dog."
              imgSrc="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2021/10/How-to-Squat.jpg"
              Action={(defaultProps) => (
                <Button {...defaultProps} onClick={handleOnClick}>
                  <TrrIcon icon={faEllipsis} />
                </Button>
              )}
            />
            <TrainingExerciseCard
              title="Pull up"
              description="The quick brown fox jumps over the lazy dog."
              imgSrc="https://image.boxrox.com/2021/06/Pull-Up.jpg"
              Action={(defaultProps) => (
                <Button {...defaultProps} onClick={handleOnClick}>
                  <TrrIcon icon={faEllipsis} />
                </Button>
              )}
            />
          </div>
        }
      />

      {/* BODY */}
      <div className="flex w-full flex-row flex-wrap gap-4 bg-base-100 py-6">
        <TrainingPlanCard
          className="cursor-pointer"
          title="Snaga - Powerlifting"
          icon={faDumbbell}
          iconClassName="text-info"
          description="The quick brown fox jumps over the lazy dog."
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
          onClick={toggleVisible}
        />
        <TrainingPlanCard
          className="cursor-pointer"
          title="Snaga - Powerlifting"
          icon={faDumbbell}
          iconClassName="text-info"
          description="The quick brown fox jumps over the lazy dog."
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        />
        <TrainingPlanCard
          className="cursor-pointer"
          title="Snaga - Powerlifting"
          icon={faDumbbell}
          iconClassName="text-info"
          description="The quick brown fox jumps over the lazy dog."
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        />
        <TrainingPlanCard
          className="cursor-pointer"
          title="Snaga - Powerlifting"
          icon={faDumbbell}
          iconClassName="text-info"
          description="The quick brown fox jumps over the lazy dog."
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        />
        <TrainingPlanCard
          className="cursor-pointer"
          title="Snaga - Powerlifting"
          icon={faDumbbell}
          iconClassName="text-info"
          description="The quick brown fox jumps over the lazy dog."
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        />
      </div>
    </div>
  );
}
