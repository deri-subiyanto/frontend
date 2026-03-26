// eslint.config.js

import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.defineConfig([
  {
    ignores: ['dist', 'build', 'coverage'],
  },

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      // 💀 TYPE SAFETY MAX LEVEL
      tseslint.configs.strictTypeChecked,

      // 🎨 Optional but useful (no Prettier)
      tseslint.configs.stylisticTypeChecked,

      // ⚛️ React hardcore rules
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],

    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      /**
       * 🔥 JAVASCRIPT HARDENING
       */
      'no-var': 'error',
      'prefer-const': 'error',
      'no-implicit-coercion': 'error',
      'no-nested-ternary': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'eqeqeq': ['error', 'always'],

      /**
       * 💀 TYPESCRIPT FINAL BOSS
       */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',

      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
        },
      ],

      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      /**
       * 🧠 CODE QUALITY
       */
      'complexity': ['error', 8],
      'max-depth': ['error', 4],
      'max-lines-per-function': ['error', 80],
      'max-params': ['error', 4],

      /**
       * ⚛️ REACT HARDCORE
       */
      'react-x/no-unstable-context-value': 'error',
      'react-x/no-direct-set-state-in-use-effect': 'error',
      'react-x/no-array-index-key': 'warn',

      /**
       * 🧼 STYLE (kalau tanpa Prettier)
       */
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-template': 'error',
      'object-shorthand': 'error',
    },
  },
])