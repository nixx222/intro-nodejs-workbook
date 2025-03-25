import express from "express"; //external module for using express
import pg from "pg";
const { Client } = pg;
import config from "./config.js"; // internal module for connecting to our config file

//boiler plate express code which allows us to run our web server
const app = express();
const port = 3000;

//we're using json as our data format
app.use(express.json());

//config is saying "thi is how we connect to our database", and now I need tools.


//Always connect to the databse, give the code, then close the database or else it will time out.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Helper Functions

//function helps us to access all of the languages in our database
async function getAllLanguages() {
  const client = new Client(config); //creating our database Client with our config values
  await client.connect(); //connecting to our database
  //code that queries the database
  let result = await client.query("SELECT * FROM programming_languages"); //querying the database
  console.log(result.rows); //printing the result of the query

  await client.end(); //ending the connection to our database
  return result.rows; 
}

async function getLanguageById(id) {
    const client = new Client(config); //creating our database Client with our config values
    await client.connect();
    let result = await client.query("SELECT * FROM programming_languages WHERE id = $1", [id]);
    console.log(result.rows);
    await client.end();
    return result.rows[0];
}

async function addOneLanguage(obj) {
  const client = new Client(config); //creating our database Client with our config values
  await client.connect();
  await client.query(`INSERT INTO programming_languages (id, name, released_year, githut_rank, pypl_rank, tiobe_rank) 
  VALUES ('17', '${obj.name}', ${obj.releasedYear}, ${obj.githutRank}, ${obj.pyplRank},${obj.tiobeRank})`);
  
  await client.end();

}

async function getAllLanguagesSortedByYear() {
  const client = new Client(config); // creating our database Client with our config values
  await client.connect();
  let result = await client.query("SELECT * FROM programming_languages ORDER BY released_year");
  console.log(result.rows);
  await client.end();
  return result.rows;
}

async function getAllLanguagesSortedByColumn(column) {
  const client = new Client(config); // creating our database Client with our config values
  await client.connect();
  let result = await client.query(`SELECT * FROM programming_languages ORDER BY ${column}`);
  console.log(result.rows);
  await client.end();
  return result.rows;
}

async function searchLanguagesByName(name) {
  const client = new Client(config); // creating our database Client with our config values
  await client.connect();
  let result = await client.query(`SELECT * FROM programming_languages WHERE name ILIKE $1`, [`%${name}%`]);
  console.log(result.rows);
  await client.end();
  return result.rows;
}


// API Endpoints
app.get("/get-all-languages", async (req, res) => {
  //this variable stores all of the data that is going to be stored in the front end.
  let languages = await getAllLanguages();
  let JSONlanguages = JSON.stringify(languages);
  res.send(JSONlanguages);
}); //get request

app.get("/get-language-by-id/:id", async (req, res) => {
    let id = req.params.id;
    let language = await getLanguageById(id);
    let JSONlanguage = JSON.stringify(language);
    res.send(JSONlanguage);


});

//add one language 
app.post("/add-one-language", async (req, res) => {
    await addOneLanguage(req.body);
    res.send("Yay! You added a language!"); //send a response to the front end
});

//Get all languages, sort by year
app.get("/get-all-languages/sort-by-year", async (req, res) => {
  let sortedlanguages = await getAllLanguagesSortedByYear();
  let JSONsortedlanguages = JSON.stringify(sortedlanguages);
  res.send(JSONsortedlanguages);

});

//get all languages, sorty by column: return a list of all of the programming languages,
//sorted by a column specified by the user, in ascending order.

app.get("/get-all-languages/sort-by/:column", async (req, res) => {
  let column = req.params.column;
  let sortedlanguages = await getAllLanguagesSortedByColumn(column);
  let JSONsortedlanguages = JSON.stringify(sortedlanguages);
  res.send(JSONsortedlanguages);
});

// api endpoint returns a list of all the programming languages that match the search term

app.get("/search-languages-by-name/:name", async (req, res) => {
  let name = req.params.name;
  let language = await searchLanguagesByName(name);
  let JSONlanguage = JSON.stringify(language);
  res.send(JSONlanguage);
});