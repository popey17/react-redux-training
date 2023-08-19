import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '1', title: 'learning Is Fun', content: 'Learning with react is fun'},
  {id: '2', title: 'Slices ...', content: 'Slices are useful'},
  {id: '3', title: 'Store in Redux', content: 'Store is the container for redux'},
  
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})



export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer