export default {
    testEnvironment: 'node',
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    verbose: true,
    coverageDirectory: "coverage",
    collectCoverage: true
};