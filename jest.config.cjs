module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}