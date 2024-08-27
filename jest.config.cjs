module.exports = {
  testMatch: ["<rootDir>/lib/tests/*.test.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"]
};
