import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog-slice";
import uiSlice from "./ui-slice";



const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    ui: uiSlice.reducer
  }
});

export const blogActions = blogSlice.actions;
export const authActions = uiSlice.actions;
export default store;
