import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { logOutUser } from 'redux/auth/authOperation';
import { Typography, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { NavLinK, ButtoN } from '../userMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleSignOut = () =>
    dispatch(logOutUser())
      .unwrap()
      .then(() => toast.success('You have successfully exited the app'))
      .catch(() => toast.error('Something went wrong, please try again'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <NavLinK variant="h6" component={NavLink} to="/contacts">
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
            <ContactPhoneIcon />
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              display: { xs: 'none', md: 'inline-block' },
            }}
          >
            Contacts
          </Typography>
        </NavLinK>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Typography
          variant="h6"
          component="p"
          sx={{ display: { xs: 'none', md: 'inline-block' } }}
        >
          Welcome, {user.name}
        </Typography>
        <ButtoN variant="h6" type="button" onClick={handleSignOut}>
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
            <LogoutIcon />
          </Typography>
          <Typography variant="h6" type="p" fontSize={18}>
            Logout
          </Typography>
        </ButtoN>
      </Box>
    </Box>
  );
};
