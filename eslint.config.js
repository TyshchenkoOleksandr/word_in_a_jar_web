import reactHooksPlugin from 'eslint-plugin-react-hooks';
import stylisticPlugin from '@stylistic/eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';
import jsPlugin from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        'typescript': true,
      },
    },
  },

  // if an ignores key is used without any other keys in the configuration object,
  // then the pattern acts as global ignores
  {
    ignores: [
      '**/dist',
      '**/build',
      '**/public',
      'src/assets',
      '**/*.test.*',
      '**/custom.d.ts',
      '**/node_modules',
      'src/serviceWorker.ts',
      'src/reportWebVitals.ts',
    ],
  },

  ...tseslint.configs.recommended,
  jsPlugin.configs.recommended,
  jestPlugin.configs['flat/recommended'],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  importPlugin.flatConfigs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,

  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
      // You only need to explicitly include jest globals if you're not using one of their shared configs
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    plugins: {
      '@stylistic': stylisticPlugin,
      'jsx-a11y': jsxA11yPlugin.flatConfigs.recommended.plugins['jsx-a11y'],
      'react': reactPlugin,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
      'jest': jestPlugin,
    },
    rules: {
      'arrow-body-style': 'off',
      // @typescript-eslint extends the base eslint/no-unused-vars rule
      // you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      'no-plusplus': 'off',
      'camelcase': 'off',
      'class-methods-use-this': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'warn',
      'no-shadow': 'warn',
      'consistent-return': 'warn',
      'no-throw-literal': 'warn',
      'no-alert': 'warn',
      'no-nested-ternary': 'warn',
      'no-await-in-loop': 'error',
      'no-param-reassign': 'warn',
      'no-restricted-syntax': 'warn',
      'no-console': 'warn',
      'default-param-last': 'warn',
      'import/order': ['warn', {
        'groups': [
          ['external', 'builtin'],
          'internal',
          ['parent', 'sibling'],
        ],
        'newlines-between': 'always',
      }],

      '@stylistic/operator-linebreak': 'off',
      '@stylistic/no-mixed-operators': 'off',
      '@stylistic/object-curly-newline': 'off',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1}],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': ['error', {
        'code': 120,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreComments': true,
        'ignoreTemplateLiterals': true,
      }],
      '@stylistic/indent': ['warn', 2, { 'ignoredNodes': ['TSFunctionType'], 'SwitchCase': 1 }],
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/no-multi-spaces': ['warn'],
      '@stylistic/jsx-tag-spacing': ['warn', { 'beforeSelfClosing': 'always' }],
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],

      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-mutable-exports': 'off',
      'import/no-unresolved': 'off',
      'import/namespace': 'error',
      'import/named': 'off',
      'import/no-cycle': 'error',

      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-boolean-value': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
      'react/jsx-curly-newline': 'off',
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-no-undef': 'off',
      'react/destructuring-assignment': 'warn',
      'react/no-array-index-key': 'warn',
      'react/no-unstable-nested-components': ['warn', {
        'allowAsProps': true,
      }],
      'react/jsx-no-constructed-context-values': 'warn',
      'react/require-default-props': 'warn',
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      'react-hooks/rules-of-hooks': 'error',

      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',

      'jsx-a11y/no-autofocus': 'off',
    },
  },
];
