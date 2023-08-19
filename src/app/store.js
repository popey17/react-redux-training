import { configureStore } from "@reduxjs/toolkit";
// import reservationsReducer from "../features/reservationSlice"
// import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {

    posts: postReducer,
    // counter: counterReducer,
  },
})