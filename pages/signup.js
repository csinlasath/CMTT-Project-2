import AuthenticationLayout from '../views/layouts/authenticationLayout';
import SignUp from '../components/SignUp';

export default () => (
    <AuthenticationLayout signOnButton="Log-in">
        <SignUp />
    </AuthenticationLayout>
);