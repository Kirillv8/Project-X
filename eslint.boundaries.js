import boundaries from 'eslint-plugin-boundaries';

export const eslintBoundariesConfig = [
  {
    plugins: {
      boundaries,
    },
    rules: {
      'boundaries/entry-point': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              target: ['features'],
              allow: ['index.(ts|tsx)', '*.page.(ts|tsx)'],
            },
          ],
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'app', pattern: 'src/app/*' },
      ],
    },
  },
];
