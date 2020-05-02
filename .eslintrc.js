module.exports = {
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': false
  },
  env: {
    browser: true,
    node: true
  }
};
