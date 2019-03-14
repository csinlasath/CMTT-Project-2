import Head from '../../components/Head';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import Footer from '../../components/Footer';

const SignedInLayout = (props) => (
  <div>
    <Head />
    <NavbarSignedIn />
    {props.children}
    <Footer />
  </div>
);

export default SignedInLayout;