import { Typography, Container, CssBaseline } from '@mui/material';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { NavLinK } from './Nav.styled';

export const AuthNav = () => {
  return (
    <>
      <CssBaseline />
      <Box display="flex" gap={0} flexShrink="0">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexShrink: '1',
            p: '10px',
          }}
        >
          <NavLinK component={NavLink} variant="h6" to="/signup" mr="10px">
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
              <AppRegistrationIcon />
            </Typography>
            <Typography
              variant="h6"
              type="p"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Register
            </Typography>
          </NavLinK>
        </Container>
        <Container
          sx={{
            display: 'flex',
            // justifyContent: 'flex-start',
            alignItems: 'center',
            p: '10px',
          }}
        >
          <NavLinK component={NavLink} variant="h6" to="/login" mr="10px">
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
              <LoginIcon />
            </Typography>
            <Typography
              variant="h6"
              type="p"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Login
            </Typography>
          </NavLinK>
        </Container>
      </Box>
    </>
  );
};
