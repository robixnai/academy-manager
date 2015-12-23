'use strict';

var _WEIGHT = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
  , _CPF_LENGTH = 11
  , _CPF_WITH_MASK_LENGTH = 14
  , _CPF_WITHOUT_CHECKED_NUMBER_LENGTH = 9
  , notValidSet = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
    ]
  , patterns = require('./patterns');

function calculateDigitValue(base) {
  var sum = 0;
  for (var i = base.length - 1, digit; i >= 0; i--) {
    digit = parseInt(base.substring(i, i + 1));
    sum += digit * _WEIGHT[(_WEIGHT.length - base.length) + i];
  }
  sum = _CPF_LENGTH - (sum % _CPF_LENGTH);
  return sum > _CPF_WITHOUT_CHECKED_NUMBER_LENGTH ? 0 : sum;
}

function validateLength(cpf) {
  return (cpf.length == _CPF_LENGTH) || (cpf.length == _CPF_WITH_MASK_LENGTH);
}

function containMask(cpf) {
	return cpf.length == _CPF_WITH_MASK_LENGTH;
}

function removeMask(cpf) {
	return cpf.replace(/[.-]/g, '');
}

function contains(array, obj) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }
  return false;
}

function validate(cpf) {
	if (!cpf || cpf == null || !validateLength(cpf)) {
    return false;
	} else {
		var cpfNumber = containMask(cpf) ? removeMask(cpf) : cpf;

		if (!patterns.integer.test(cpfNumber) || contains(notValidSet, cpfNumber)) {
      return false;
		}

		var cpfWithoutCheckedNumber = cpfNumber.substring(0, _CPF_WITHOUT_CHECKED_NUMBER_LENGTH)
      , checkedDigit1 = calculateDigitValue(cpfWithoutCheckedNumber)
      , checkedDigit2 = calculateDigitValue(cpfWithoutCheckedNumber + checkedDigit1);

		return cpfNumber == (cpfWithoutCheckedNumber + checkedDigit1 + checkedDigit2);
	}
}

module.exports = { validate: validate };
