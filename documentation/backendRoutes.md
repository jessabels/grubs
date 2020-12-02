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
- POST /api/recipes/:id/likes (like a recipe)
- DELETE /api/recipe/:id/likes (dislike a recipe)
- POST /api/recipes/:id/comments (post a comment on a recipe)
- PUT /api/recipes/:id/comments (edit a comment on a recipe)
- POST /api/recipes/:id/comments/likes (like a comment on a recipe)
- DELETE /api/recipes/:id/comments/likes (remove a like from a comment on a recipe)
- POST /api/users/:userId/recipes (save a recipe)
- DELETE /api/users/:userId/recipes (delete a recipe)
