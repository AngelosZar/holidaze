import Layout from '../components/Layout';
import Header from '../components/Header';
function Homepage({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

export default Homepage;
