## Backend Routes

**auth**

- POST /api/session (login)
- DELETE /api/session (logout)
- POST /api/users (sign-up)

**users**

- GET /api/users/:userId (get user info)
- PUT /api/users/:userId (edit user info)

**recipes**

- GET /api/recipes (get all recipes)
- GET /api/recipes/:id (get individual recipe)

**recipes saved by users**

- GET /api/users/:userId/recipes

**recipe likes**

- GET /api/recipes/:id/likes (get likes on a recipe)
- POST /api/recipes/:id/likes (like a recipe)
- DELETE /api/recipe/:id/likes (dislike a recipe)

**recipe tips**

- GET /api/recipe/:id/tips (view tips on a recipe)
- POST /api/recipes/:id/tips (post a tip on a recipe)
- PUT /api/recipes/:id/tips (edit a tip on a recipe)
- DELETE /api/recipes/:id/tips (remove a tip from a recipe)

**marking recipe tips as useful**

- POST /api/recipes/:id/tips/:tipId/likes (mark a tip as useful on a recipe)
- DELETE /api/recipes/:id/tips/:tipId/likes (remove useful mark from a tip on a recipe)

**saving/deleting recipes**

- POST /api/users/:userId/recipes/:recipeId (save a recipe)
- DELETE /api/users/:userId/recipes/:recipeId (delete a recipe)
