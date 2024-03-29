import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "learning redux",
    content: "Content for id 1, trying to learn redux.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "title for post with id 2",
    content:
      "Content for id 2, i dont know what to write, may the force be with me.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reaction:{
              thumbsUp:0,
              wow:0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            }
          },
        };
      },
    },
    reactionAdded(state,action){
      const {postId, reaction} = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if(existingPost){
        existingPost.reaction[reaction]++;
      }
    }
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded,reactionAdded } = postSlice.actions;
export default postSlice.reducer;
