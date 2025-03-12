
import { readFile } from 'fs';
const action = process.argv[2];

export function printBooks (books) {

    for (let i = 0; i < books.length; i++) {
      console.log(books[i].title + "/n");
      console.log(books[i].text + "/n");
    }
}
function printAllBooks() {
  
 readFile("./data.json", "utf8", (err, data) => {

    const books = JSON.parse(data);
    // A loop that prints to the console the individual text and summary of each of the books.
    for (let i = 0; i < books.length; i++) {
      console.log(books[i].title + "/n");
      console.log(books[i].text + "/n");
    }
  });
}

function printOneBook(num) {
  readFile("./data.json", "utf8", (err, data) => {
    const books = JSON.parse(data);
    for (let i = 0; i < books.length; i++) {
      if (i == Number(num)) {
        console.log(books[i].title + "/n");
        console.log(books[i].text + "/n");
      }
    }
  });
}

if (action === "getAll") {
  printAllBooks();
} else if (action === "getOne") {
  printOneBook(process.argv[3]);
} else {
  console.log("There was an error!");
}
