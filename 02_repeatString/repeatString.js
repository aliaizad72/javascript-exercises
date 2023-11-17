const repeatString = function(string, number) {
    let oldString;
    let newString;
    if (number === 0) {
        newString = ``;
    } else if (number < 0) {
        newString = `ERROR`;
    } else {
        for (i = 1; i <= number; i++) {
            if (i === 1) {
                newString = string;
            } else {
                oldString = newString;
                newString = oldString + string;
            }
        }
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
