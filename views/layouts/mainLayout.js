import Head from '../../components/Head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = (props) => (
  <div>
    <Head />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;