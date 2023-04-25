import { useAuth } from 'hooks/useAuth';
import { Typography, Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const textCenter = { textAlign: 'center' };
export default function Home() {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Box>
        <Box
          sx={{
            flexGrow: 3,
            m: '0 auto',
          }}
        >
          {!isLoggedIn ? (
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={textCenter}
              >
                Welcome to phonebook
              </Typography>
              <Typography variant="h5" component="h2" sx={textCenter}>
                Please login or register
              </Typography>
            </Container>
          ) : (
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ textAlign: 'center' }}
              >
                Welcome, {user.name}!
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={textCenter}
              >
                {
                  'Click on the contacts button to continue with your contacts... '
                }
              </Typography>
            </Container>
          )}
        </Box>
      </Box>
    </>
  );
}
