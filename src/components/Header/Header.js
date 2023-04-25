import { useTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  CssBaseline,
} from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { AuthNav } from '../AuthNav';
import { UserMenu } from '../userMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexShrink: 3,
              flexGrow: 1,
              width: '200px',
            }}
          >
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '24px',
                  height: '24px',
                  mr: '5px',
                }}
              >
                <HomeIcon />
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Home
              </Typography>
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => dispatch(toggleTheme())}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness4Icon />
              ) : (
                <Brightness5Icon />
              )}
            </IconButton>
          </Container>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
