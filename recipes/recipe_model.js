const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getIngredients,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getIngredients() {
  return db("ingredients");
}

// getShoppingList(recipe_id): should return a
// list of all ingredients and quantities for a given
// recipe

function getShoppingList(id) {
  return db("recipe_ingredients as r")
    .innerJoin("ingredients as i", "i.id", "r.ingredient_id")
    .where({ recipe_id: id })
    .select("i.ingredient_name", "r.quantity");
}

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getInstructions(id) {
  return db("recipe_steps as s")
    .where({ recipe_id: id })
    .select("s.step_number", "s.instructions");
}

// .innerJoin("recipes as r", "s.recipe_id", "r.id")
