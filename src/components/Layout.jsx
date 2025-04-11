import Header from './Header';
import Footer from './Footer';
import { Children } from 'react';
function Layout({ Children }) {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  );
}

export default Layout;
