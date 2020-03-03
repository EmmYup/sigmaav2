module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
    },
};
