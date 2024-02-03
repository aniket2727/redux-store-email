

// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
