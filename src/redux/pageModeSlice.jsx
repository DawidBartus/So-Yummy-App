import { createSlice } from "@reduxjs/toolkit";

const initialState = { pageMode: false };

const pageModeSlice = createSlice({
  name: "pageMode",
  initialState,
  reducers: {
    togglePageMode: (state) => {
      state.pageMode = !state.pageMode;
    },
  },
});

export const { togglePageMode } = pageModeSlice.actions;
export default pageModeSlice.reducer;
