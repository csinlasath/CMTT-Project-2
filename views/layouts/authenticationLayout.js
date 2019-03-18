import Head from '../../components/Head';
import NavbarAuthentication from '../../components/NavbarAuthentication';
import Footer from '../../components/Footer';

const Layout = (props) => (
  <div>
    <Head />
    <NavbarAuthentication signOnButton="Sign Up" link="/signup" />
    {props.children}
    <Footer />
  </div>
);

export default Layout;