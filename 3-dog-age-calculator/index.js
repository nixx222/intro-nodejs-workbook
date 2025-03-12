// Your code will go here!

// - Year 1 of a dog's life is 15 dog years
// - Year 2 is the equivalent of another 9 years.
// - Every year after that is the equivalent of another 5 years.

// Some ages to try to make sure your app works:

// - 1 human year -> 15 dog years
// - 2 human years -> 24 dog years
// - 10 human years -> 64 dog years


let dogName = process.argv[2]; 
let humanYears = Number(process.argv[3]); 
let dogYears;

if (humanYears === 1) {
  dogYears = 15; // 1 human year -> 15 dog years
} else if (humanYears === 2) {
  dogYears = 24; // 2 human years -> 24 dog years
} else if (humanYears > 2) {
  dogYears = 24 + (humanYears - 2) * 5; // Every additional year -> +5 dog years
}


console.log(`Your dog, ${dogName}, is ${humanYears} years old, but that's ${dogYears} years old in dog years!`);
