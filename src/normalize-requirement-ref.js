'use strict';

function normalizeRequirementRef(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var match = value.trim().match(/^(?:RIP-)?([A-Za-z][A-Za-z0-9]{1,9})-(\d{1,6})$/i);
  if (!match) {
    return null;
  }

  var number = Number(match[2]);
  if (!Number.isSafeInteger(number) || number < 1) {
    return null;
  }

  return match[1].toLowerCase() + '-' + String(number).padStart(3, '0');
}

module.exports = normalizeRequirementRef;
