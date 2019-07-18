const express = require("express");

const Recipes = require("./recipe_model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get schemes" });
  }
});

router.get("/:id/shoppinglist", async (req, res) => {
  const { id } = req.params;

  try {
    const ingredients = await Recipes.getShoppingList(id);

    if (ingredients.length) {
      res.json(ingredients);
    } else {
      res.status(404).json({ message: "Could not find ingredients" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get ingredients" });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;

  try {
    const instructions = await Recipes.getInstructions(id);

    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: "Could not find instructions " });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get instructions" });
  }
});

module.exports = router;
