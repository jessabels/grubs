## Backend Routes

**auth**

- POST /api/session (login)
- DELETE /api/session (logout)
- POST /api/users (sign-up)

**users**

- GET /api/users (get all users)
- GET /api/users/:userId (get user info)
- PUT /api/users/:userId (edit user info)

**recipes**

- GET /api/recipes/course/:dietId (get recipes based on course and diet)
- GET /api/recipes/:id (get individual recipe)

**recipes saved by users**

- GET /api/users/:userId/recipes

**recipe likes**

- GET /api/recipes/likes (get all recipe likes)
- POST /api/recipes/:id/likes (like a recipe)
- DELETE /api/recipe/:id/likes (unlike a recipe)

**recipe tips**

- GET /api/recipe/tips (get all recipe tips)
- POST /api/recipes/:id/tips (post a tip on a recipe)
- PUT /api/recipes/:id/tips (edit a tip on a recipe)
- DELETE /api/recipes/:id/tips (remove a tip from a recipe)

**marking recipe tips as useful**

- POST /api/recipes/:id/tips/:tipId/likes (mark a tip as useful on a recipe)
- DELETE /api/recipes/:id/tips/:tipId/likes (remove useful mark from a tip on a recipe)

**saving/deleting recipes**

- POST /api/users/:userId/recipes/:recipeId (save a recipe)
- DELETE /api/users/:userId/recipes/:recipeId (delete a recipe)
