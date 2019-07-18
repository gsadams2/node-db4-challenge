const express = require("express");

const Ingredients = require("./recipe_model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredients.getIngredients();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: "Failed to get schemes" });
  }
});

module.exports = router;
