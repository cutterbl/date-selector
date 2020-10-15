import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Basics',
        ['the selector', 'defaultDate', 'minDate', 'maxDate'],
        'Custom Components',
      ],
    },
  },
};
