import { grey, teal } from '@mui/material/colors';

export const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: {
      ...teal,
      ...(mode === 'dark' && {
        main: teal[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: grey[600],
        paper: teal[900],
      },
    }),
    secondary: {
      ...teal,
      ...(mode === 'dark' && {
        main: teal[50],
      }),
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[400],
          }
        : {
            primary: teal[50],
            secondary: grey[500],
          }),
    },
  },
});
