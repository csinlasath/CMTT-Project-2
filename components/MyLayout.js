/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Header from "../components/Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
