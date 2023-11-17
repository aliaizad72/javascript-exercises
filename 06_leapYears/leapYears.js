const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        return true;
    } else  if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }

};
//Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

/*
 1. DECLARE a variable YEAR
 2. IF year is DIVISIBLE by 4  
     BUT NOT divisible by
    OR year is divisible by 400
     THEN it is a leap year
*/

// Do not edit below this line
module.exports = leapYears;
