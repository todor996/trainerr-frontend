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
  className = '',
}: TrrStepProps): JSX.Element {
  const colorDict: Record<string, string> = {
    primary: 'before:!bg-primary after:border-primary',
    secondary: 'before:!bg-secondary after:border-secondary',
    success: 'before:!bg-success after:border-success',
    warning: 'before:!bg-warning after:border-warning',
    error: 'before:!bg-error after:border-error',
    neutral: 'before:!bg-neutral after:border-neutral',
    '': 'before:!bg-neutral after:border-neutral',
  };

  const stateDict = {
    active: `after:border-2 after:border-solid after:bg-neutral ${colorDict[color || '']}`,
    completed: `step-${color}`,
    disabled: 'step-error',
    '': '',
  };

  return <li className={twMerge('step', stateDict[state], className)}>{children}</li>;
}
