import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';
import { UpdateContactForm } from 'components/UpdateContactForm';
import { UpdateContactModalStyle } from './UpdateContactModals';

export const UpdateContactModal = ({
  isOpenModal,
  onClose,
  id,
  name,
  number,
}) => (
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
        <UpdateContactForm
          onClose={onClose}
          id={id}
          name={name}
          number={number}
        />
      </Box>
    </Fade>
  </Modal>
);

UpdateContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
