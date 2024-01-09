module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: [
    "<rootDir>/src/load-jest-preset.ts",
    "<rootDir>/src/jest.setup.ts",
  ],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};