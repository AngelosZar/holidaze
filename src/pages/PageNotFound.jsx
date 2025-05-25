import Layout from '../components/layout/Layout';
import pageNotFound from '../assets/images/pageNotFound.jpg';
function PageNotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src={pageNotFound}
          alt="page not found"
          className="object-cover  max-h-[70vh] rounded-lg shadow-lg"
        />
      </div>
    </Layout>
  );
}

export default PageNotFound;
