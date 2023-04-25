import { ContactsItems } from './ContactsItem';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from '../../redux/contacts/selectors';
import { List, ListItem, Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/system';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContact);
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: '800px', m: '10px auto 0 auto' }}>
        {filteredContacts.length === 0 ? (
          <Container sx={{ m: '25px auto 15px auto' }} maxWidth="sm">
            <Typography variant="h5" component="h2" gutterBottom>
              There is no such contact in your phonebook
            </Typography>
          </Container>
        ) : (
          <List dense={false} sx={{ width: '100%' }}>
            {filteredContacts.map(({ id, name, number }) => (
              <ListItem
                key={id}
                alignItems="center"
                sx={{
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#607d8b' : '#ede7f6',
                  borderRadius: '6px',
                  boxShadow: 6,
                  mb: '8px',
                  p: '15px',
                }}
              >
                <ContactsItems key={id} id={id} name={name} number={number} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};
