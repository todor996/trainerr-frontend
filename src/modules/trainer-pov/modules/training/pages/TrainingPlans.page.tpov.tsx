import { faDumbbell, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button, Drawer } from 'react-daisyui';
import { TrainingPlanCard } from '../components/TrainingPlanCard.component.tpov';
import { TrainingPlansHeader } from '../components/TrainingPlansHeader.component.tpov';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import {
  getTrainingPlanAction,
  getTrainingPlansAction,
} from '../store/trainingActions.store';
import { TrainingPlanDetails } from '../components/TrainingPlanDetails.component.tpov';
import { setInitStatePlan } from '../store/trainingSlice.store';
import { useSearchParams } from 'react-router-dom';

export default function TrainingPlansPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const plans = useAppSelector((state) => state.training.plans);
  const plan = useAppSelector((state) => state.training.plan);
  const [visible, setVisible] = useState(false);
  // TODO: Handle loading and error states

  useEffect(() => {
    if (searchParams.get('id')) {
      dispatch(getTrainingPlanAction(Number(searchParams.get('id'))));
    }

    dispatch(getTrainingPlansAction());
  }, [dispatch, searchParams]);

  useEffect(() => {
    // TODO: Check this with BE team
    if (plan.id > 0) {
      setVisible(true);
    }
  }, [plan]);

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
  }

  // TODO: Make opening of a drawer a little more optimal if the user is opening the same plan
  const toggleVisible = useCallback(() => {
    // On Close
    if (visible) {
      searchParams.delete('id');
      setSearchParams(searchParams);
      dispatch(setInitStatePlan());
    }

    setVisible((visible) => !visible);
  }, [dispatch, visible, searchParams, setSearchParams]);

  function openDetails(id: number) {
    // get all current params
    const url = new URL(window.location.href);
    // add `id` param
    url.searchParams.set('id', id.toString());
    // set all params
    setSearchParams(url.searchParams);

    dispatch(getTrainingPlanAction(id));
  }

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
        side={plan && <TrainingPlanDetails plan={plan} toggleVisible={toggleVisible} />}
      />

      {/* BODY */}
      <div className="flex w-full flex-row flex-wrap gap-4 bg-base-100 py-6">
        {(plans || []).map((plan) => (
          <TrainingPlanCard
            key={plan.id}
            className="cursor-pointer"
            title={plan.name}
            icon={faDumbbell}
            iconClassName="text-info"
            description={plan.description}
            onClick={() => openDetails(plan.id)}
            Action={(defaultProps) => (
              <Button {...defaultProps} onClick={handleOnClick}>
                <TrrIcon icon={faEllipsis} />
              </Button>
            )}
          />
        ))}
      </div>
    </div>
  );
}
