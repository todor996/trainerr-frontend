import { MouseEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavOption {
  text?: string;
  icon?: IconDefinition | null;
  to: string;
  isActive?: boolean;
  isParent?: boolean;
  isChild?: boolean;
  navChildren?: Array<NavOption>;
  children?: JSX.Element;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}
