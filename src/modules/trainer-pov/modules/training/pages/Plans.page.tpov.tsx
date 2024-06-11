import { faDumbbell, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button, Drawer } from 'react-daisyui';
import { PlanCard } from '../components/PlanCard.component.tpov';
import { PlansHeader } from '../components/PlansHeader.component.tpov';
import { useCallback, useEffect, useState } from 'react';
import { PlanDetails } from '../components/PlanDetails.component.tpov';
import { useSearchParams } from 'react-router-dom';
import { useTrainingStore } from '../store/training.store';
import { XStack, YStack } from 'tamagui';

export default function PlansPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const store = useTrainingStore();
  const { plans, plan } = store;
  // TODO: Handle loading and error states

  useEffect(() => {
    if (searchParams.get('id')) {
      store.getTrainingPlan(Number(searchParams.get('id')));
    }

    store.getTrainingPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
      store.setInitPlan();
    }

    setVisible((visible) => !visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, searchParams, setSearchParams]);

  function openDetails(id: number) {
    // get all current params
    const url = new URL(window.location.href);
    // add `id` param
    url.searchParams.set('id', id.toString());
    // set all params
    setSearchParams(url.searchParams);

    store.getTrainingPlan(id);
  }

  return (
    <YStack paddingHorizontal="24px">
      {/* HEADER */}
      <PlansHeader className="py-3" />

      {/* DRAWER */}
      <Drawer
        className="z-20"
        open={visible}
        onClickOverlay={toggleVisible}
        end={true}
        side={plan && <PlanDetails plan={plan} toggleVisible={toggleVisible} />}
      />

      {/* BODY */}
      <XStack
        width="100%"
        flexWrap="wrap"
        gap="16px"
        backgroundColor="$base"
        paddingVertical="24px"
      >
        {(plans || []).map((plan) => (
          <PlanCard
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
      </XStack>
    </YStack>
  );
}
