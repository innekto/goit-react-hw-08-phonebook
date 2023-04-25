import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Paper,
  FilledInput,
} from '@mui/material';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Person } from '@mui/icons-material';
import { addContact } from 'redux/contacts/functions';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { selectContacts } from 'redux/contacts/selectors';
import { YupValidationLAddContactsForm } from 'constants/ValidationSchema';

export const AddContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  //Form submit
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    //Checking for duplicate names and phone numbers in contacts
    const isIncludeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = contacts.some(contact => contact.number === number);

    if (isIncludeName) {
      resetForm();
      return Report.failure('', `${name} is already in contact`);
    } else if (isIncludeNumber) {
      resetForm();
      const { name } = contacts.find(contact => contact.number === number);
      return Report.failure('', `${number} is already in contact as ${name}`);
    }

    //Add new contact
    dispatch(addContact(values))
      .then(() => {
        toast.success('Сontact was successfully added');
        onClose();
      })
      .catch(() => toast.error('Oops, something went wrong. Please try again'));
    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: YupValidationLAddContactsForm,
    onSubmit: handleSubmit,
  });
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <FilledInput
                endAdornment={
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                }
                fullWidth
                autoFocus
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="name"
                label="Name"
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
              <FormHelperText error={true}>
                {formik.touched.name && formik.errors.name}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="number">Number</InputLabel>
              <FilledInput
                endAdornment={
                  <InputAdornment position="end">
                    <ContactPhoneIcon />
                  </InputAdornment>
                }
                fullWidth
                id="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                type="text"
                label="Number"
                error={formik.touched.number && Boolean(formik.errors.number)}
              />
              <FormHelperText error={true}>
                {formik.touched.number && formik.errors.number}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </form>
    </Paper>
  );
};

AddContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
