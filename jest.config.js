export default {
    testEnvironment: 'jsdom',
    transform: {
      ".(ts|tsx)": "ts-jest",
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "package.json",
        "package-lock.json",
    ],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/__mocks__/fileMock.js",
        '\\.(css|scss)$': 'identity-obj-proxy',
        "src/(.*)$": "<rootDir>/client/src/$1",
    }
};

