process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['cdn.statically.io'],
    path: '/_next/image',
    loader: 'default'
  }
}

module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/lib(.*)$': '<rootDir>/lib$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/services(.*)$': '<rootDir>/services$1'
  }
}
