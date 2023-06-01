/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/components/__tests__/**/*.(test|spec).(jsx|tsx)'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
    '^.+\\.jsx?$': 'babel-jest',
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