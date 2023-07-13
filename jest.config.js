/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/components/__tests__/**/*.(test|spec).(jsx|tsx)'],
   type: "module",
  testEnvironment: "node",
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};
