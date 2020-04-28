const assert = require('assert')
const eslint = require('eslint')
const conf = require('../')

const ECMA_VERSION = 11
const ALLOWED_ERRORS = 0

// The source files to lint.
const repoFiles = ['index.js', 'test/index.js']

// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ['node', 'es6'],
  parserOptions: { ecmaVersion: 2018 },
  rules: conf.rules,
  useEslintrc: false,
}

// Runs the linter on the repo files and asserts no errors were found.
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles)
assert.equal(report.errorCount, 0)
assert.equal(report.warningCount, 0)
repoFiles.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file))
})
