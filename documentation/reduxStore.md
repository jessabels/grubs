```
entities: {
  users: {
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
  currentRecipeId: recipeId,
  currentUserId: userId,
  currentToken: tokenId
}


errors: {
  loginErrors: [],
  signupErrors: [],
  tipFormErrors: []
}

```
