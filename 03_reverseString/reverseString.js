const reverseString = function(string) {
    const newStringArray = [];
    
    for (const chars of string) {
        newStringArray.unshift(chars);
    }

    let newString = newStringArray.join('');

    return newString;
};
// Do not edit below this line
module.exports = reverseString;
