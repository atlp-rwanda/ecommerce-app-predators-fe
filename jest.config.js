/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/components/__tests__/**/*.(test|spec).(jsx|tsx)'],
    testEnvironment: 'jsdom', // Use JSDOM as the test environment
    moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS modules
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extend Jest's expect with matchers from Jest DOM
    transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript and JSX files using Babel
    },
    coverageThreshold: {
        global: {
            statements: 30,
            branches: 30,
            functions: 30,
            lines: 30,
        },
        'src/components/**/*.{js,jsx,ts,tsx}': {
            statements: 30,
            branches: 30,
            functions: 30,
            lines: 30,
        },
    },
};