module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/lib(.*)$': '<rootDir>/lib$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/services(.*)$': '<rootDir>/services$1'
  }
}
