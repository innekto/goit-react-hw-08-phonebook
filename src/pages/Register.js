import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { Helmet } from 'react-helmet-async';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegistrationForm />
    </div>
  );
}
