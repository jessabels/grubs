```
entities: {
  user: {
    userId: {
      id,
      firstName,
      lastName,
      email;
    }
  },

  recipes: {
    recipeId: {
      title,
      description,
      cookTime,
      imageUrl,
      courseId,
      tips: [tipId],
      likes: [likeId]
    }
  },

  recipeTips: {
    tipId: {
      text,
      recipeId,
      userId,
      likes: [likeId]
    }
  },

  recipeLikes: {
    recipeLikeId: {
      recipeId,
      userId
    }
  },

  tipLikes: {
    tipLikeId: {
      tipId,
      userId
    }
   }
}

session: {
  currentRecipe: recipeId,
  currentUser: userId
}

ui: {
  modal: false
}

errors: {
  authenticationErrors: []
}

```
