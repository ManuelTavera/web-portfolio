//  @ts-check

import { globalIgnores } from 'eslint/config'
import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  // Type-aware linting needs every file to belong to the TS project, so
  // anything outside it fails to parse rather than merely failing a rule.
  // These patterns keep the `**/` prefix on purpose: ESLint matches relative
  // to this file, so a bare `dist` would miss a nested one — unlike git, which
  // matches at any depth.
  globalIgnores(
    [
      'eslint.config.js',
      'prettier.config.js',
      '**/design/',
      // Build output. Which of these exists depends on the Nitro preset:
      // locally it is .output, while Netlify's build publishes dist.
      '**/dist/',
      '**/dist-ssr/',
      '**/.output/',
      '**/.nitro/',
      '**/.netlify/',
    ],
    'project ignores',
  ),
]
