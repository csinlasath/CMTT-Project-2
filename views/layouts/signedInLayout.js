import Head from '../../components/Head';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// };

const SignedInLayout = (props) => (
  <div>
    <Head />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

const MainLayout = (props) => (
  <div>

  </div>

);

export default SignedInLayout;