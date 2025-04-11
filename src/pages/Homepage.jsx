import Layout from '../components/Layout';

function Homepage() {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
}

export default Homepage;
//
function HomeHero() {
  return (
    <div className="">
      <h1>This is the hero section</h1>
    </div>
  );
}
