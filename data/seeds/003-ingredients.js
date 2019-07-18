exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "dough" },
    { ingredient_name: "sauce" },
    { ingredient_name: "noodles" }
  ]);
};
