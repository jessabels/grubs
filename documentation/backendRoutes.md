## Backend Routes

**auth**

- POST /api/session (login)
- POST /api/users (sign-up)

**users**

- GET /api/users (get all users)

**recipes**

- POST /api/recipes (create a recipe)
- DELETE /api/:userId/recipes/:recipeId (delete a recipe)
- GET /api/recipes (get all recipes)
- GET /api/recipes/:course/:dietId (get recipes based on course and diet)
- GET /api/users/:userId/recipes (get all recipes owned by particular user)

**ingredients**

- POST /api/ingredients/:recipeId (create ingredients for recipe)

**instructions**

- POST /api/instructions/:recipeId
  (create instructions for recipe)

**recipes saved by users**

- GET /api/users/:userId/recipes

**recipe likes**

- GET /api/recipes/likes (get all recipe likes)
- PUT /api/recipes/:id/likes (like/unlike a recipe)

**recipe tips**

- GET /api/recipes/:id/tips (get all recipe tips)
- POST /api/recipes/:id/tips (post a tip on a recipe)
- PUT /api/recipes/:id/tips (edit a tip on a recipe)
- DELETE /api/recipes/:id/tips (remove a tip from a recipe)

**marking recipe tips as useful**

- GET /api/recipes/tips/likes (get all tip likes)
- PUT /api/recipes/:id/tips/:tipId/likes (mark/unmark a tip as useful on a recipe)
