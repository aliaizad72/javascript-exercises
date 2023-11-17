const removeFromArray = function() {
    for (i = 0; i < arguments.length; i++) {
        if (i === 0) {
            continue;
        } else {
            for (j = 0; j < arguments[0].length; j++) {
                if (arguments[0][j] === arguments[i]) {
                    arguments[0].splice(j, 1)
                }
            }
        }
    }

    return arguments[0]
};
// Do not edit below this line
module.exports = removeFromArray;
