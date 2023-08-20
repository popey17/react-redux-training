import { configureStore } from "@reduxjs/toolkit";
// import reservationsReducer from "../features/reservationSlice"
// import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/users/usersSlice"

export const store = configureStore({
  reducer: {

    posts: postReducer,
    users: userReducer
    // counter: counterReducer,
  },
})