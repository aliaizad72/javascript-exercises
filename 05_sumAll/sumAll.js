//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

const sumAll = function(number1, number2) {
    let newTotal;

    if ((number1 < 0 || number2 < 0) || typeof(number1) != 'number' || typeof(number2) != 'number') {
        newTotal = "ERROR";
    } else if (number1 < number2) {
        for (i = number1; i <= number2; i++) {
            if (i === number1) {
                newTotal = i;
            } else {
                newTotal = i + newTotal;
            }
        }
    } else {
        for (i = number2; i <= number1; i++) {
            if (i === number2) {
                newTotal = i;
            } else {
                newTotal = i + newTotal;
            }
        }
    }
    return newTotal;
};

// Do not edit below this line
module.exports = sumAll;
