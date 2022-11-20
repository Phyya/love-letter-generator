import * as yup from 'yup';

export const PartnershipSchema = yup.object().shape({
  firstName: yup.string().required('Please enter your First Name'),
  email: yup
    .string()
    .email('Please type in a valid email address')
    .required('Please enter your email'),
  message: yup.string().required('Please enter a message'),
});
