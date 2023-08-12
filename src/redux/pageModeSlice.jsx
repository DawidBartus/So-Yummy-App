import { createSlice } from "@reduxjs/toolkit";

const checkIfDarkMode = JSON.parse(localStorage.getItem("darkMode"));

const initialState = { pageMode: checkIfDarkMode || false };

const pageModeSlice = createSlice({
  name: "pageMode",
  initialState,
  reducers: {
    togglePageMode: (state) => {
      localStorage.setItem("darkMode", !state.pageMode);
      state.pageMode = !state.pageMode;
    },
  },
});

export const { togglePageMode } = pageModeSlice.actions;
export default pageModeSlice.reducer;
