// Create a program that checks to see if the current year is leap year using the Moment module.
const moment = require("moment");

const currentYear = moment().year();

const isLeapYear = moment([currentYear]).isLeapYear();

if (isLeapYear) {
    console.log(`The year ${currentYear} is a leap year!`);
} else {
    console.log(`The year ${currentYear} is not a leap year!`);
}
