export default {
    testEnvironment: 'jsdom',
    transform: {
      '.(ts|tsx)': 'ts-jest',
      '.svg': 'jest-transformer-svg'
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'package.json',
        'package-lock.json',
    ],
    moduleNameMapper: {
        '\\.svg': 'identity-obj-proxy',
        '\\.(css|scss)$': 'identity-obj-proxy',
        'src/(.*)$': '<rootDir>/client/src/$1',
    }
}

