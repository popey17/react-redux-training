import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {id: '1', title: 'learning Is Fun', content: 'Learning with react is fun', 
  date:sub(new Date(),{minutes:10}).toISOString(),
  },
  {id: '2', title: 'Slices ...', content: 'Slices are useful', userId:'Alice',
  date:sub(new Date(),{minutes:5}).toISOString(),
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd: {
      reducer( state,action ){
        state.push(action.payload)
      },
      prepare(title,content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          }
        }
      }
    },
  }
})



export const selectAllPosts = (state) => state.posts;

export const { postAdd } = postSlice.actions

export default postSlice.reducer