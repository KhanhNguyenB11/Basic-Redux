import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "0",
    name: "Mai bao tieu lang quan",
  },
  {
    id: "1",
    name: "Vong Ngu",
  },
  {
    id: "2",
    name: "Nhi Can",
  },
];
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{

    }
})
export const selectAllUsers = state => state.users;
export default userSlice.reducer;