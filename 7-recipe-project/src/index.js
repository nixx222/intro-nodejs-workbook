//import statments:
const express = require("express"); //external module that will allow us to build a web server.
const fs = require("fs").promises; //built-in Node module that allows us to interact with the file system.

const app = express(); //creates a new instance of the express module so that we can use all the methods/functions and properties of express in our web server.
const port = 3001; //port number that the server will listen to.

app.use(express.json()); //middleware that allows us to parse JSON data from the request body.

//create the function that will turn on the server and listen for requests on this port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//API Endpoints

//Find all recipes
app.get("/get-all-recipes", async (req, res) => {
  const recipes = await getAllRecipes();
  res.send(JSON.stringify(recipes));
});

//Find One Recipe

app.get("/get-one-recipe/:id", async (req, res) => {
  const recipe = await getOneRecipe(req.params.id);
  res.send(JSON.stringify(recipe));
});

//Delete One Recipe

app.get("/delete-one-recipe/:id", async (req, res) => {
  const result = await deleteOneRecipe(req.params.id);
  if (result) {
    res.json("Recipe Deleted Successfully.");
  } else {
  res.status(404).json("Recipe Not Found");
    }
});

//Update the Name of One Recipe

app.get("/update-one-recipe/:id/:name", async (req, res) => {
  const recipeId = req.params.id;  // Extract the recipe ID from the URL
  const newName = req.params.name; // Extract the new name from the URL

  const result = await updateOneRecipe(recipeId, newName);

  if (result) {
    res.send("Recipe Updated Successfully.");
  } else {
    res.status(404).send("Recipe Not Found");
  }
});

//Helper Functions

//find all recipes
async function getAllRecipes() {
  const recipes = await fs.readFile("../data/recipe-data.json", "utf8");
  let parsedRecipes = JSON.parse(recipes);
  console.log(parsedRecipes);
  return parsedRecipes;
}

//find one recipe
async function getOneRecipe(id) {
  const recipes = await fs.readFile("../data/recipe-data.json", "utf8");
  let parsedRecipes = JSON.parse(recipes);
  console.log(parsedRecipes);
  return parsedRecipes[id];
}

//delete one recipe
async function deleteOneRecipe(id) {
  try {
    const recipes = await fs.readFile("../data/recipe-data.json", "utf8");
    let parsedRecipes = JSON.parse(recipes);

    if (parsedRecipes[id]) { // Check if the recipe exists at the given index
      parsedRecipes.splice(Number(id), 1);  // Remove the recipe at that index
      const stringRecipes = JSON.stringify(parsedRecipes);
      await fs.writeFile("../data/recipe-data.json", stringRecipes, "utf8");
      return true; // Return true if the recipe is deleted successfully
    } else {
      console.error("Recipe Not Found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting recipe", error.message);
    return false; // Return false if there is an error
  }
}

//update the name of one recipe
async function updateOneRecipe(id, newName) {
  try {
    const recipes = await fs.readFile("../data/recipe-data.json", "utf8");
    let parsedRecipes = JSON.parse(recipes);

    if (parsedRecipes[id]) {//check if the recipe exists
      parsedRecipes[id].name = newName || "Updated Name"; // Update the name
      const stringRecipes = JSON.stringify(parsedRecipes);
      await fs.writeFile("../data/recipe-data.json", stringRecipes, "utf8");
      return true; // Return true if the recipe is updated successfully
    } else {
      console.error("Recipe Not Found");
      return false; // Return false if the recipe is not found
    }
  } catch (error) {
    console.error("Error updating recipe", error.message);
    return false; // Return false if there is an error
  }
}
