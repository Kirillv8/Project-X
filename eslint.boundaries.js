import boundaries from 'eslint-plugin-boundaries';

export const eslintBoundariesConfig = [
  {
    plugins: {
      boundaries,
    },
    rules: {
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'features', allow: ['shared', 'features'] },
            { from: 'app', allow: ['shared', 'features', 'app'] },
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
