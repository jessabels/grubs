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
        {
          specification:
            "Preheat a waffle iron to medium-high. Preheat the oven to 200 degrees F if using to keep cooked waffles warm.",
          listOrder: 1,
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Whisk together the flour, sugar, baking powder, cornstarch and 3/4 teaspoon salt in a large bowl. Whisk together the soy milk, oil and vanilla in a medium bowl. Pour the milk mixture into the flour mixture and gently stir until just incorporated (it is OK if there are some lumps).",
          listOrder: 2,
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Generously spray the top and bottom of the waffle iron with cooking spray. Fill each compartment almost completely, and spread the batter to the edges. Close the lid and cook until the waffles are golden brown and crisp, 6 to 7 minutes. Keep the cooked waffles warm in the oven or covered with foil on a plate while you make the remaining waffles. Serve with maple syrup, nut butter or fruit preserves.",
          listOrder: 3,
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Place the curry paste in a medium saucepan over medium heat and cook, stirring, for 1 minute or until fragrant.",
          listOrder: 1,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Add the coconut milk, water, salt and pepper and bring to a boil.",
          listOrder: 2,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Add the broccoli, cover and cook for 10 minutes or until the broccoli is tender.",
          listOrder: 3,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Remove from the heat and add the spinach leaves and half the cilantro.",
          listOrder: 4,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Using an immersion blender, blend the soup until smooth.",
          listOrder: 5,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Divide among serving bowls and top with the extra spinach, remaining cilantro, scallions and shallots.",
          listOrder: 6,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "To make the pesto, add basil, pine nuts, garlic cloves, kal and olive oil to a blender and run until combined.",
          listOrder: 1,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "Spread pesto sauce on both slices of bread",
          listOrder: 2,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "On one slice of bread, add cheese, avocado, and spinach.",
          listOrder: 3,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Top with the other piece of bread pressing it gently together.",
          listOrder: 4,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "In a small fry pan, heat up coconut butter.",
          listOrder: 5,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Cook sandwich on both sides for four to five minutes, or until golden.",
          listOrder: 6,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification: "Cut sandwich in half or in quarters.",
          listOrder: 7,
          recipeId: 8,
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
