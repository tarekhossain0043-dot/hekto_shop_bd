import { configureStore } from "@reduxjs/toolkit";
import setLanguageSlice from "../features/language/languageSlice";
const store = configureStore({
  reducer: {
    language: setLanguageSlice,
  },
});
export default store;
