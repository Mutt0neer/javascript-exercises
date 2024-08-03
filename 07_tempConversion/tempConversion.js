const convertToCelsius = function(F) {
  console.log(Math.round(1.3))
  return(Math.round(((F-32)*(5/9))*10)/10)
};

const convertToFahrenheit = function(C) {
  console.log(Math.round(1.3))
  return(Math.round((C*(9/5)+32)*10)/10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
