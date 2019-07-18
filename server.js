const express = require("express");

const RecipeRouter = require("./recipes/recipe_router");
const IngredientsRouter = require("./recipes/ingredients_router");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientsRouter);

module.exports = server;
