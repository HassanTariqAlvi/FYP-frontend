import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIndex: 1,
};
export const listItemSelectSlice = createSlice({
  name: "listItemSelect",
  initialState,
  reducers: {
    setSelectedIndex: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedIndex } = listItemSelectSlice.actions;

export default listItemSelectSlice.reducer;
