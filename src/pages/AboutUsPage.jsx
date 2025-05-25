import AboutUs from '../components/onHomepage/AboutUs';
import Layout from '../components/layout/Layout';
function AboutUsPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <AboutUs />
        </div>
      </Layout>
    </>
  );
}

export default AboutUsPage;
