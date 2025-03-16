// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'expo',
    "eslint:recommended",
  ],
  ignorePatterns: ['/dist/*'],
};
