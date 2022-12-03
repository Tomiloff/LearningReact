import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";
import React from "react";


const state = {
  posts: [
    {id: 1, message: "Привет, как ты?", likesCount: 18},
    {id: 2, message: "Да всё хорошо", likesCount: 20}
  ]
};


it("length of posts should be incremented", () => {
  // 1. start data
  let action = addPostCreator("React-Redux-yo");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
})


it("message of new post should be correct", () => {
  // 1. start data
  let action = addPostCreator("React-Redux-yo");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe("React-Redux-yo"); 
})


it("after deleting length of message should be decrement", () => {
  // 1. start data
  let action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
})


it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. start data
  let action = deletePost(1000);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
})

