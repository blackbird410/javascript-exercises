const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(arr) {
	let s = 0;
  let i = 0;
  for (i = 0; i < arr.length; i++)
    s += arr[i];
  return s;
};

const multiply = function(arr) {
  let i = 0;
  let result = 1;
  for (i = 0; i < arr.length; i++)
  {
    result *= arr[i];
  }
  return result;
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
  if (arguments[0] <= 1)
    return 1;
  return arguments[0] * factorial(arguments[0] - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
