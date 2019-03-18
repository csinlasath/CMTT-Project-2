import AuthenticationLayout from '../views/layouts/authenticationLayout';
import SignIn from '../components/SignIn';

export default () => (
    <AuthenticationLayout signOnButton="Sign-Up">
        <SignIn />
    </AuthenticationLayout>
);