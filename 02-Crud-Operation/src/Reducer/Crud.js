import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'React js', content: 'React is client side rendering' },
  { id: 2, title: 'Node js', content: 'Node is server side rendering' },
];

const postslice = createSlice({
  name: 'Cruds',
  initialState,
  reducers: {
    addpost: (state, action) => {
      state.push(action.payload);
    },
    deletepost: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
    editpost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addpost, deletepost, editpost } = postslice.actions;

export default postslice.reducer;
