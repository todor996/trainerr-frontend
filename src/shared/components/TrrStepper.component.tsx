import { SizableText, XStack, XStackProps, YStack, YStackProps } from 'tamagui';

type TrrStepState = 'active' | 'completed' | 'disabled' | 'error' | '';

export interface TrrStepStateValue {
  step: Partial<YStackProps & { color: string }>;
  connect: Partial<XStackProps>;
}

export interface TrrStepperStep {
  index?: string;
  label?: string;
  state?: TrrStepState;
}

interface TrrStepperProps {
  steps: Array<TrrStepperStep>;
  color: string;
  /**
   * Determines if the steps should be connected with a line
   */
  toConnect?: boolean;
}

export function TrrStepper(props: TrrStepperProps): JSX.Element {
  const stateDict: Record<string, TrrStepStateValue> = {
    active: {
      step: {
        backgroundColor: '$neutral',
        color: '$neutral-contrast',
        borderColor: props.color,
        borderWidth: '2px',
      },
      connect: {
        backgroundColor: '$neutral',
      },
    },
    completed: {
      step: {
        backgroundColor: props.color,
        color: `${props.color}-contrast`,
        borderColor: props.color,
      },
      connect: {
        backgroundColor: props.color,
      },
    },
    disabled: {
      step: {
        backgroundColor: `${props.color}-300`,
        borderColor: '$neutral',
      },
      connect: {},
    },
    error: {
      step: {
        backgroundColor: '$error',
        borderColor: '$error',
      },
      connect: {
        backgroundColor: '$neutral',
      },
    },
    '': {
      step: {
        backgroundColor: '$neutral',
        color: '$neutral-contrast',
        borderColor: '$neutral',
      },
      connect: {
        backgroundColor: '$neutral',
      },
    },
  };

  // in px
  const size = {
    step: 32,
    connect: 8,
  };

  return (
    <XStack alignItems="center" justifyContent="space-between" width="100%">
      {props.steps.map((step, index) => (
        <XStack
          key={index}
          alignItems="flex-start"
          flexGrow={index + 1 === props.steps.length ? 0 : 1}
        >
          {/* STEP */}
          <YStack alignItems="center" zIndex={1}>
            <XStack
              position="relative"
              alignItems="center"
              justifyContent="center"
              width={`${size.step}px`}
              height={`${size.step}px`}
              borderRadius="$10"
              {...stateDict[step.state || ''].step}
            >
              {step.index || index + 1}
            </XStack>
            <SizableText position="absolute" top={`${size.step + 4}px`}>
              {step.label}
            </SizableText>
          </YStack>

          {/* CONNECT */}
          {props.toConnect && index + 1 !== props.steps.length ? (
            <XStack
              position="absolute"
              width="100%"
              height={`${size.connect}px`}
              left={`${size.step / 2}px`}
              top={`${size.step / 2 - size.connect / 2}px`} // So it is in center of STEP (circle)
              backgroundColor={props.color}
              {...stateDict[step.state || ''].connect}
            ></XStack>
          ) : null}
        </XStack>
      ))}
    </XStack>
  );
}
