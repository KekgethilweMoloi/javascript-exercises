const reverseString = function(sentence) {
    let mySplitSentence = sentence.split('');
    const reverseSentence = mySplitSentence.reverse();
    const joinSentence = reverseSentence.join('');

    return joinSentence;

};

// Do not edit below this line
module.exports = reverseString;
