import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faBell,
  faCog,
  faCommentMedical,
  faCubes,
  faDumbbell,
  faSackDollar,
  faUser,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { NavOption } from '@shared/types/NavOption.type';
import { t } from 'i18next';

export function navOptionsTpov(): {
  topNavOptions: Array<NavOption>;
  bottomNavOptions: Array<NavOption>;
} {
  return {
    topNavOptions: [
      {
        text: t('page.training.training'),
        icon: faDumbbell,
        to: '/trainer/training',
        navChildren: [
          {
            text: t('page.training.plan'),
            icon: null,
            to: '/trainer/training/plans',
            isChild: true,
          },
          {
            text: t('page.training.exercises'),
            icon: null,
            to: '/trainer/training/exercises',
            isChild: true,
          },
        ],
      },
      {
        text: t('page.nutrition.nutrition'),
        icon: faApple,
        to: '/trainer/nutrition',
      },
      {
        text: t('page.clients.clients'),
        icon: faUserFriends,
        to: '/trainer/clients',
      },
      {
        text: t('page.notifications.notifications'),
        icon: faBell,
        to: '/trainer/notifications',
      },
      {
        text: t('page.profile.profile'),
        icon: faUser,
        to: '/trainer/profile',
      },
    ],
    bottomNavOptions: [
      {
        text: t('page.app.app'),
        icon: faCubes,
        to: '/trainer/app',
      },
      {
        text: t('page.monetization.monetization'),
        icon: faSackDollar,
        to: '/trainer/monetization',
      },
      {
        text: t('page.settings.settings'),
        icon: faCog,
        to: '/trainer/settings',
      },
      {
        text: t('page.feedback.feedback'),
        icon: faCommentMedical,
        to: '/trainer/feedback',
      },
    ],
  };
}
