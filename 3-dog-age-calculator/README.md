
### Introduction

In this lab, you will be creating a small Node.js app that can take in input on the command line and give the user the answer they're looking for.

### Goal

When you're done, you'll have a small command-line app that other developers can download and run.

### Resources

Here are two excellent articles quickly summarizing `process.argv`:

- [Access Command Line Arguments Using process.argv in Node.js](https://www.webmound.com/nodejs-command-line-arguments/)
- [NodeJS process.argv property explained](https://sebhastian.com/nodejs-process-argv/)


#### Dog Age Calculator

It's not _actually_ true that 1 dog year is 7 human years. Nor is the calculation we'll follow _quite_ right—to get a truly accurate picture of a dog's age, you need to take their size into account as well.

But for the purposes of this assignment, you will calculate a dog's real age with the following rules:

- Year 1 of a dog's life is 15 dog years
- Year 2 is the equivalent of another 9 years.
- Every year after that is the equivalent of another 5 years.

Some ages to try to make sure your app works:

- 1 human year -> 15 dog years
- 2 human years -> 24 dog years
- 10 human years -> 64 dog years

Your app will work with a dog's name and age in human years, and return a sentence about their age in dog years. Running `node dog-age-calculator-.js Maisie 3` should output: "Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!"

Similarly, `node dog-age-calculator.js Ralph 4` will output, "Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!"


