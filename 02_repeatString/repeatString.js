const repeatString = function(word, repeats){
    if(repeats < 0 ){
        return "ERROR";
    }
    let newString = "";
    for(let i = 0; i < repeats; i++){
        newString += word;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
