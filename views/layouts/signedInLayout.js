import Head from '../../components/Head';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import Footer from '../../components/Footer';
import ReactDOM from 'react-dom';

const SignedInLayout = (props) => (
  <div>
    <Head />
    <NavbarSignedIn />
    <div className="footerPush">
      {props.children}
    </div>
    <Footer />
    <style jsx> {`
      .footerPush {
        height: 100vh - 200px;
      }
      
    `}
    </style>
  </div>
);

export default SignedInLayout;