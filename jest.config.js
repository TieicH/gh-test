/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
}