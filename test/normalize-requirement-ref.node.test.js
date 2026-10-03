'use strict';

var assert = require('node:assert/strict');
var test = require('node:test');
var normalizeRequirementRef = require('../src/normalize-requirement-ref');

test('normalizes a modern Spectrace reference', function () {
  assert.equal(normalizeRequirementRef('E2E-3'), 'e2e-003');
});

test('normalizes the retired RIP-prefixed form', function () {
  assert.equal(normalizeRequirementRef('RIP-E2E-003'), 'e2e-003');
});

test('rejects malformed or non-string input without throwing', function () {
  assert.equal(normalizeRequirementRef('not-a-reference'), null);
  assert.equal(normalizeRequirementRef('E2E-0'), null);
  assert.equal(normalizeRequirementRef(null), null);
});
