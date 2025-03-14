const express = require("express"); //external module that will allow us to build a web server.

const app = express(); //creates a new instance of the express module so that we can use all the methods/functions and properties of express in our web server.
const fs = require("fs"); //built-in Node module that allows us to interact with the file system.
const port = 3000; //port number that the server will listen to.

app.use(express.json()); //middleware that allows us to parse JSON data from the request body.

//create the function that will turn on the server and listen fo requests on this port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

//sending data
// app.get("/", (req, res) => {
//     const myData = {
//         id : 47,
//         email: 'test@test.com'
//     }
//     const myJSONData = JSON.stringify(myData);
//     res.send(myData);
//   });

// //specify a route
// app.get("/user", (req, res) => {
//     const myData = {
//         id : 47,
//         email: 'test@test.com'
//     }
//     const myJSONData = JSON.stringify(myData);
//     res.send(myData);
//   });

// //specify a route with a parameter
// app.get("/users/:user", (req, res) => {
//     const myData = {
//         id : req.params.user,
//         email: 'test@test.com'
//     }
//     const myJSONData = JSON.stringify(myData);
//     res.send(myData);
//   });

//Helper Functions 
function getAllBooks () {
    const books = fs.readFile("../data.json", "utf8", (err, data) => {
        return JSON.parse(data);
    }); 
    return books;
}

//API Endpoints

//The client has requested all of the books

app.get("/get-all-books", async (req, resp) => {
    const books = await getAllBooks();
    resp.send(JSON.stringify(books));
});

app.get("/get-one-book/:id", async (req, resp) => {
    const book = await getOneBook(req.params.id);
    resp.send(JSON.stringify(books));
});
