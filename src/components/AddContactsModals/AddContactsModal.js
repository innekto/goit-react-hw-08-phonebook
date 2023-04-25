import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';

import { AddContactForm } from '../AddContactForm/AddContactForm';

import { modalStyles } from './ContactsModal';

export const AddContactModal = ({ isOpenModal, onClose }) => (
  <div>
    <Modal
      open={isOpenModal}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="spring-modal-name"
      aria-describedby="spring-modal-number"
    >
      <Fade in={isOpenModal}>
        <Box sx={modalStyles}>
          <AddContactForm onClose={onClose} />
        </Box>
      </Fade>
    </Modal>
  </div>
);

AddContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
