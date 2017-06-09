module.exports = {
  "extends": ["eslint:recommended", "google"],
  "plugins": [
    "standard",
    "promise"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "no-var": 0,
    "require-jsdoc": 0,
    "space-before-blocks": 0,
    "space-before-function-paren": 0,
    "brace-style": 0
  },
  "globals": {
    "document": true,
    "window": true,
    "module": true
  }
};