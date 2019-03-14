import Head from '../../components/Head';
import Masthead from '../../components/Masthead';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// };

const Layout = (props) => (
  <div>
    <Head />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;