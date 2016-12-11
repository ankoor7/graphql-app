module.exports = {
  "env": {
    "browser": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    "max-len": ["error", {"code": 105, "ignoreComments": true}],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off"
  }
};