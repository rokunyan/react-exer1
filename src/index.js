//Call all functions inside services and log updated value/s
import {getAllUsers, getUserById, updateUser, addUser} from "./services/users";
import {getPosts, getPostsByUser, getPostById, addPost, updatePostTitle, updatePostBody, updatePost, deletePostBy, deletePostsByUserId} from "./services/posts";
import {getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById, addComment} from "./services/comments";
  
  // USER LOGS
  updateUser(1, { email: "roger@77.com" });
  console.log("get all users: ", getAllUsers());
  
  console.log("get user by id: ", getUserById(1));
  
  //add user
  const newUser = {
    name: "Roxane Jane Reyes",
    username: "rokunyan",
    email: "sample@gmail.com",
    phone: "0101010101",
    address: {
      street: "this street",
    },
    company: {
      name: "77GSI",
    },
  };

  addUser(newUser);
  console.log("get all users: ", getAllUsers());
  
   // POSTS LOGS
   
   //post
   console.log("All posts: ", getPosts());
   console.log("Post by user: ", getPostsByUser(3));
   
   //delete post
   console.log("delete post Id 2: ", deletePostBy(2));
   console.log("delete post by userId 2: ", deletePostsByUserId(2));
   
   //update title
   updatePostTitle(2, "New Title");
   console.log("Updated Title for post Id 2 ", getPostById(2));
   
   //update body
   updatePostBody(3, "LALALALALALALALA");
   console.log("Post id 3 with the new body: ", getPostById(3));
   
   //either update body or title

   //only title
   updatePost(2, { title: "New Title"});
   console.log(
     "Updated title but not body for id 2: ",
     getPostById(2)
   );

   //only body
   updatePost(2, { body: "Eto ung new body ni Id 2"});
   console.log(
     "Updated body but not title for id 2: ",
     getPostById(2)
   );

   //both body and title
   updatePost(2, { title: "New Title 2", body: "Both body and title"});
   console.log(
     "Updated title and body for id 2: ",
     getPostById(2)
   );
   
   //new post
   const newPost = {
     userId: 9999,
     title: "Title 9999",
     body: "Body 9999",
   };
   addPost(newPost);
   console.log("All posts: ", getPosts());


  // COMMENTS LOGS
  console.log("Comments by postId 1: ", getCommentsByPostId(1));
  console.log("Delete comment by id 2: ", deleteCommentById(2));
  
  updateCommentBody(4, "updated comment");
  console.log("Updated comment by id 4: ", getCommentById(4));
  
  //new comment
  const newComment = {
    postId: 1000,
    name: "rokunyan",
    email: "sample@gmail.com",
    body: "Comment ni 1000",
  };
  addComment(newComment);
  
 