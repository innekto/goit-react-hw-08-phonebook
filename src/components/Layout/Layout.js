import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, CssBaseline } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={1500} />
      </Box>
    </>
  );
};
