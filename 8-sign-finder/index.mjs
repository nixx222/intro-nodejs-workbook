import { getSign, getZodiac } from 'horoscope';

// Get command-line arguments
const month = parseInt(process.argv[2], 10);  // Parse as integer
const day = parseInt(process.argv[3], 10);    // Parse as integer
const year = parseInt(process.argv[4], 10); // Year is not needed for horoscope, but we can store it for the birthstone part

// Validate inputs
if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    console.error("Invalid input. Please ensure the month is between 1-12 and the day is between 1-31.");
    process.exit(1); // Exit the program if input is invalid
}

// Get astrological sign
const astrologicalSign = getSign({ month, day }); // Pass as object
const zodiacSign = getZodiac(year);

// Output the results
console.log(`Your astrological sign is ${astrologicalSign} and your zodiac sign is ${zodiacSign}.`);
