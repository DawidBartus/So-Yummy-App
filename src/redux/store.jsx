import { configureStore } from "@reduxjs/toolkit";
import pageModeReducer from "./pageModeSlice";

const store = configureStore({
  reducer: {
    pageMode: pageModeReducer,
  },
});

export default store;
