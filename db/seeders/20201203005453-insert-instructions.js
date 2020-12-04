"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Instructions",
      [
        {
          specification:
            "Place potatoes in a large pot and cover with salted water to cover potatoes by about an inch. Heat over high heat and bring to a boil. Reduce heat to low, cover, and simmer for 15-20 minutes, until potatoes are soft when you insert a fork.",
          listOrder: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Drain potatoes and place back in the pot. Use a potato masher (or a fork) to mash the potatoes.",
          listOrder: 2,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Add in the butter and cream cheese and use an electric hand mixer to mix until melted and incorporated  into the potatoes.",
          listOrder: 3,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Slowly add in the cream and continue to whisk with the electric mixer. Add salt and pepper.",
          listOrder: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Remove from heat and transfer to a serving dish, garnish with  extra butter and serve warm.",
          listOrder: 5,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Line baking sheet with foil or parchment. Arrange salmon skin-side-down, season with salt and pepper and drizzle the tops with oil. Bake uncovered at 425 for 10-15 min (depending on thickness of salmon) or until salmon is cooked through.",
          listOrder: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "In a small sauce pan, combine 1/4 cup finely diced onion, 1/4 cup lemon juice, 1/4 cup wine and simmer over medium heat until reduced to a thick mixture (7-8 min).",
          listOrder: 2,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Whisk in 1/2 cup cream and as soon as it comes to a simmer, reduce to low heat and slowly whisk in the 8 Tbsp butter, one tablespoon at a time (whisking constantly). Add 1/4 tsp salt or to taste and remove from heat. Cover with a lid to keep warm until ready to serve.",
          listOrder: 3,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Plate salmon and drizzle generously with the lemon sauce, garnish with freshly chopped parsley then serve.",
          listOrder: 4,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "In a bowl, mash the banana with a fork.",
          listOrder: 1,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "Add eggs and cinnamon. Mix until combined.",
          listOrder: 2,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Heat a nonstick skillet over medium heat. Add a spoonful of batter and cook for 3-4 minutes, then flip and cook for an additional 3-4 minutes.",
          listOrder: 3,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Place about 2 ounces of dairy-free cheese–shredded or in strips–on top of four of the bread slices.",
          listOrder: 1,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Top with the remaining four and press the sandwiches together firmly.",
          listOrder: 2,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Lightly oil a non-stick cooking pan with olive oil, then place it over medium-high heat and add the sandwiches.",
          listOrder: 3,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Cook each sandwich until the dairy-free cheese is melted and the bread is golden brown on both sides, about 2 to 3 minutes per side. Serve warm.",
          listOrder: 4,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "In a large pot, bring the milk to a boil.",
          listOrder: 1,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Add the pasta and stir constantly until the pasta is cooked, about 10 minutes.",
          listOrder: 2,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated.",
          listOrder: 3,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Instructions", null, {});
  },
};
