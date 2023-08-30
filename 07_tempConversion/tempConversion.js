let tempCalc;

const convertToCelsius = function(temp) {
  tempCalc = (temp - 32) * 5 / 9;
  if(tempCalc % 1 !== 0){
    return Math.round(tempCalc * 10)/ 10;
  } 
  else{
    return tempCalc ;
  }
};
  
const convertToFahrenheit = function(temp) {
  tempCalc = (temp * 9/5 + 32);
  if(tempCalc % 1 !== 0){ 
     return Math.round(tempCalc * 10)/ 10;
  }
  else{
    return tempCalc;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
