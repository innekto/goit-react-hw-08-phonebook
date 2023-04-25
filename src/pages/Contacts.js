import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/functions';
import { selectLoader, selectContacts } from 'redux/contacts/selectors';
import { Typography, Box, Button } from '@mui/material';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Loading } from 'notiflix';
import { AddContactModal } from '../components/AddContactsModals/AddContactsModal';
import { Filter } from '../components/Filter/Filter';
import { Container } from '@mui/system';
import { useTheme } from '@mui/system';

export default function Contacts() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Box maxWidth="xl">
        <Container display="flex">
          {contacts.length !== 0 && <Filter />}
        </Container>
        <Container>
          {contacts.length !== 0 ? (
            <ContactsList />
          ) : (
            <Container sx={{ m: '25px auto 15px auto' }} maxWidth="sm">
              <Typography variant="h5" component="h2" gutterBottom>
                Please add the contact to your phonebook
              </Typography>
            </Container>
          )}
          {isLoading ? Loading.hourglass() : Loading.remove()}

          <Button
            variant="contained"
            aria-label="Add contact"
            color="primary"
            size="medium"
            sx={{
              position: 'absolute',
              top: '1%',
              left: '50%',
              width: '90px',
              height: '50px',
              bgcolor: theme.palette.mode === 'dark' ? '#468698' : '#55a19e',
              transform: 'translateX(-50%)',
            }}
            onClick={handleOpenModal}
          >
            <Typography
              component="p"
              fontSize={12}
              fontWeight="500"
              textTransform="none"
            >
              Add contact
            </Typography>
          </Button>
          <AddContactModal
            isOpenModal={isModalOpen}
            onClose={handleCloseModal}
          />
        </Container>
      </Box>
    </>
  );
}
