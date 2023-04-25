import { createSlice } from '@reduxjs/toolkit';

const theme = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = theme.actions;

export const themeReducer = theme.reducer;
