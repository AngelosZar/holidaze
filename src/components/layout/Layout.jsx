import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-[1520px] flex flex-col mx-auto flex-grow min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
