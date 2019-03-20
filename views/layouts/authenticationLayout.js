import HeadAuthentication from '../../components/HeadAuthentication';
import NavbarAuthentication from '../../components/NavbarAuthentication';
import Footer from '../../components/Footer';

const AuthenticationLayout = (props) => (
  <div>
    <HeadAuthentication />
    <NavbarAuthentication signOnButton="Sign Up" link="/signup" />
    {props.children}
    <Footer />
  </div>
);

export default AuthenticationLayout;