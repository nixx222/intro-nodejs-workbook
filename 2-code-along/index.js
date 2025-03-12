// Here is where you will write your bill splitter code
// Hard Coded:
// let bill = 100
// let tipPercentage = .20;
// let numGuests = 4;

// User Generated 
let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

let tipAmount = bill * tipPercentage;
let totalBill = bill + tipAmount;
let billPerPerson = totalBill / numGuests;

console.log(`Each person needs to pay $${billPerPerson}`);
console.log(process.argv);

//// REQUEST: Received the request from the frontend (in a POST request) to create our bill and calculate the amount that needs to be paid per guest.
// STORE: Send the amountPerGuest, bill, tip, numOfGuest to the database. Run a query to INSERT the data into our data table. 
// RESPONSE: Send the amountOwedPerGuest to the Frontend so that it can be displayed to the user