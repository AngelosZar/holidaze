import Layout from '../components/layout/Layout';
import pageNotFound from '../assets/images/pageNotFound.jpg';
function PageNotFound() {
  return (
    <Layout>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <img
          src={pageNotFound}
          alt="page not found"
          class="object-cover  max-h-[70vh] rounded-lg shadow-lg"
        />
      </div>
    </Layout>
  );
}

export default PageNotFound;
