module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'standard-with-typescript', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'max-len': [0, 160, 2, { ignoreUrls: true }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
