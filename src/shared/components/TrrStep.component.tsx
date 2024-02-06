import { ComponentColor } from '@type/daisyui.type';
import { twMerge } from 'tailwind-merge';

type TrrStepState = 'active' | 'completed' | 'disabled' | '';

export interface TrrStepProps {
  children: React.ReactNode;
  className?: string;
  color?: ComponentColor;
  state?: TrrStepState;
}

export function TrrStep({
  state = '',
  color,
  children,
  className,
}: TrrStepProps): JSX.Element {
  const stateDict = {
    active: `before:!bg-${color} after:border-2 after:border-solid after:border-${color} after:bg-neutral`,
    completed: `step-${color}`,
    disabled: 'step-error',
    '': '',
  };

  return <li className={twMerge('step', stateDict[state], className)}>{children}</li>;
}
