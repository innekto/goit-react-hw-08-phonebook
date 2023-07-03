import { useFormik } from 'formik';
import { toast } from 'react-toastify';

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
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/functions';
import { YupValidationLAddContactsForm } from 'constants/ValidationSchema';
import { Person, PhoneIphone } from '@mui/icons-material';

export const UpdateContactForm = ({ onClose, id, name, number }) => {
  const dispatch = useDispatch();

  //Form submit
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
      toast.error('Please make changes to the contact');
      return;
    }
    //Update contact
    dispatch(updateContact({ id, values }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch(() => toast.error('Oops, something went wrong. Please try again'));
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    validationSchema: YupValidationLAddContactsForm,
    onSubmit: handleSubmit,
  });

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
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
                    <PhoneIphone />
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
          Update contact
        </Button>
      </form>
    </Paper>
  );
};
