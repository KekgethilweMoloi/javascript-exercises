const removeFromArray = function(arr, ...param) {
    const newArray = [];
    arr.forEach(item => {
        if(!param.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
