const config = {
  extends: [
    // /!\ Order matters
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],

  ignorePatterns: ['dist', 'build', 'node_modules/'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  env: {
    browser: true,
    jest: true,
    es6: true,
  },

  rules: {
    'no-plusplus': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off', // In strict mode, (almost?) all return types are automatically infered.
    '@typescript-eslint/no-var-requires': 'off', // We need require in order to import image with the Metro bundler. See https://facebook.github.io/react-native/docs/images

    'import/extensions': 'off', // We don't want to specify `.ts` on all imports.
    'import/no-default-export': 'error', // We try to avoid default exports, to improve searchability and refactoring.
    'import/no-extraneous-dependencies': 'off', // Force us to move react-testing-library into the `dependencies` section ?!
    'import/no-unresolved': 'off', // Bug? tsc check it anyway.
    'import/prefer-default-export': 'off', // We like named export as well.

    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off', // Typescript allow to do spreading safely.
    'react/state-in-constructor': 'off', // Can't make this works. "Definition for rule 'react/state-in-constructor' was not found"
    'react/static-property-placement': 'off', // Can't make this works. "Definition for rule 'react/static-property-placement' was not found"
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],

    'import/no-default-export': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 'error',
    'react/require-default-props': 0,
    'react/display-name': 0,
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};

module.exports = config;
