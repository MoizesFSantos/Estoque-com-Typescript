module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  
  overrides:[
    {
    file: ['*.ts','*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars':[2,{arg:'none'}]
    }
  }
    ]
};
