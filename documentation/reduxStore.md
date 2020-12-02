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
      comments: [commentId],
      likes: [likeId]
    }
  },

  comments: {
    commentId: {
      text,
      recipeId,
      userId,
      likes: [likeId]
    }
  },

  likes: {
    likeId: {
      recipeId,
      userId
    }
  },

  commentLikes: {
    commentLikeId: {
      commentId,
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
