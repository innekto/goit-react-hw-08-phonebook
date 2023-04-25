import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/system';
import { useEffect, lazy, useState, useMemo } from 'react';
import { Loading } from 'notiflix';
import { useAuth } from '../../hooks/useAuth';
import { Routes, Route } from 'react-router-dom';
import { getDesignTokens } from '../../constants/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, createTheme } from '@mui/material';
import { Layout } from '../Layout/Layout';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRouter';
import { refreshUser } from 'redux/auth/authOperation';
import { selectApplicationTheme } from 'redux/theme/themeSelector';

const HomePage = lazy(() => import('../../pages/Home'));
const RegistraitionPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const [mode, setMode] = useState('light');
  const darkMode = useSelector(selectApplicationTheme);

  useEffect(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          {isRefreshing ? Loading.hourglass() : Loading.remove()}
          {!isRefreshing && (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="/signup"
                  element={
                    <RestrictedRoute
                      redirectTo={'/contacts'}
                      component={<RegistraitionPage />}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo={'/contacts'}
                      component={<LoginPage />}
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      redirectTo={'/login'}
                      component={<ContactsPage />}
                    />
                  }
                />
              </Route>
            </Routes>
          )}
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};
