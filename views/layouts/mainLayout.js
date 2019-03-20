import HeadAuthentication from '../../components/HeadAuthentication';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = (props) => (
  <div>
    <HeadAuthentication />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;