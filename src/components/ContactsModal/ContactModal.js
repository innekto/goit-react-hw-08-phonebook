import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';

import { UpdateContactForm } from '../UpdateContactForm';
import { ContactModalStyle } from './ContactModalStyle';

export const UpdateContactModal = ({ isOpenModal, onClose }) => (
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
        <Box sx={UpdateContactModalStyle}>
          <UpdateContactForm onClose={onClose} />
        </Box>
      </Fade>
    </Modal>
  </div>
);

UpdateContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
