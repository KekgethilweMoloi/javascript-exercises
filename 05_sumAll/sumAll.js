const sumAll = function(min, max) {
    if(min < 0 || max < 0){
        return "ERROR";
    }
    if(!Number.isInteger(min) || !Number.isInteger(max))
    {
        return "ERROR";
    }
    if(min < max){
        return((max-min) + 1) * (min + max) / 2;
    }
    if(min > max){
         return ((min - max) + 1) * (min + max) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
