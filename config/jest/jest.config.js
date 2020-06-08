const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 60,
      lines: 70,
      statements: 70,
    },
  },
  automock: false,
  collectCoverageFrom: [
    '<rootDir>/src/client/**/*.(ts|tsx)',
    '!<rootDir>/src/client/*.(ts|tsx)',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/client/**/index.(ts|tsx)',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'svg',
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.client.json',
    },
  },
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  rootDir: '../../',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/FileMock.js',
  },
  testMatch: ['**/*.(spec|test).(ts|tsx)'],
  setupFiles: ['<rootDir>/src/client/setupEnzyme.ts'],
};
