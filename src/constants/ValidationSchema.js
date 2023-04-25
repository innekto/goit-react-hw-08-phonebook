import * as yup from 'yup';

export const YupValidationRegistration = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short !')
    .max(20, 'Too Long !')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
    })
    .required('Please enter your name'),

  email: yup.string().email('Enter a Vaid Email').required('Email is Required'),

  password: yup
    .string()
    .required('Enter Your Password')
    // .matches(PasswordRegEx, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(20, 'Too long'),
});

export const YupValidationLoginForm = yup.object().shape({
  email: yup.string().email('Enter a Vaid Email').required('Email is Required'),

  password: yup
    .string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(20, 'Too long'),
});

export const YupValidationLAddContactsForm = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
    })
    .required('Name is required'),
  number: yup
    .string()
    .min(12, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(/^[+0-9-]+$/, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    })
    .required('Phone number is required'),
});
