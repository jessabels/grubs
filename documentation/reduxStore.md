```
{
  user: {
    id ,
    firstName,
    lastName,
    email
},

   recipes: {
     recipeId: {
     title,
     description,
     cookTime,
     imageUrl,
     courseId,
     comments: [“commentId”]
     likes: [“likeId”]
}
},

    comments: {
      commentId: {
      text,
      recipeId,
      userId,
      likes: [“commentLikeId]
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
},

      currentRecipe: {
        recipeId
}
}
```
