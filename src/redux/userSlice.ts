import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
