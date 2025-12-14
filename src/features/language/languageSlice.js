import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  currency: "USD",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.language = action.payload;
    },
    setCurrenc: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrenc, setLang } = languageSlice.actions;
export default languageSlice.reducer;
