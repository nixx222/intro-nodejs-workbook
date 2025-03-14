// Create a Node app that determines the birthstone based on a month inputted by the user. Refer to the README instructions. 

const fs = require('fs');

// Get the month from the command line arguments
const month = process.argv[2];

// Check if the user provided a month
if (!month) {
  console.log('Please provide a month. Example: node birthstone.js January');
  process.exit(1);
}

// Read the data.json file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data.json:', err);
    return;
  }

  try {
    // Parse the JSON data
    const birthstones = JSON.parse(data);

    // Find the birthstone for the provided month
    const birthstone = birthstones[month];

    if (birthstone) {
      console.log(`The birthstone for ${month} is ${birthstone}.`);
    } else {
      console.log('Invalid month. Please provide a valid month name.');
    }
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});
