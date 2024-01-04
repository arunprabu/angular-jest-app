module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: [
    "<rootDir>/src/load-jest-preset.ts",
    "<rootDir>/src/jest.setup.ts",
  ],
};