const { defaults } = require("jest-config");
module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts?(x)$/,
        warnOnly: true
      }
    }
  },
  transformIgnorePatterns: ["/node_modules"],
  testMatch: ["<rootDir>/src/**/*.(test|spec).ts?(x)"],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1"
  }
};
