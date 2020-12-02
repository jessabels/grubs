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
- GET /api/recipes/:courseId/:dietId (get recipes of specific course and diet)
- GET /api/recipes/:id (get individual recipe)

**recipe likes**

- POST /api/recipes/:id/likes (like a recipe)
- DELETE /api/recipe/:id/likes (dislike a recipe)

**recipe tips**

- GET /api/recipe/:id/commments (view tips on a recipe)
- POST /api/recipes/:id/comments (post a tip on a recipe)
- PUT /api/recipes/:id/comments (edit a tip on a recipe)
- DELETE /api/recipes/:id/comments (remove a tip from a recipe)

**marking recipe tips as useful**

- POST /api/recipes/:id/comments/likes (mark a tip as useful on a recipe)
- DELETE /api/recipes/:id/comments/likes (remove useful mark from a tip on a recipe)

**saving/deleting recipes**

- POST /api/users/:userId/recipes/:recipeId (save a recipe)
- DELETE /api/users/:userId/recipes/:recipeId (delete a recipe)
