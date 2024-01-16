const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let result = (celcius * 9 / 5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
