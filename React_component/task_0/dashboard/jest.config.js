module.exports = {
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|png|jpg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
