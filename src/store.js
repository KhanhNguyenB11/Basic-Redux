import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/users/usersSlice";
import postReducer from "./features/posts/postSlice";
export const store = configureStore({
    reducer:{
        posts: postReducer,
        users: userReducer,
    }
})