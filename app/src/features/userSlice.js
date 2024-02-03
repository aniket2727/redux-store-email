import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null, // Add this line
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token; // Add this line
    },
    logoutUser: (state) => {
      state.email = null;
      state.token = null; // Add this line
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;