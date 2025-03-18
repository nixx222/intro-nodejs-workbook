// Create Node.js app that determines the astrological and zodiac signs for the user based on their birthday. Refer to the README instructions.
import { getSign, getZodiac } from 'horoscope';

const birthday = process.argv[2] || ''; // Get the birthday from the command line arguments

