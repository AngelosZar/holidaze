import Layout from '../components/layout/Layout';
import HeroGrid from '../components/onSingleVenue/HeroGrid';
import VenueInfoSection from '../components/onSingleVenue/VenueInfoSection';
function SingleVenuePage() {
  return (
    <Layout>
      <HeroGrid />
      <VenueInfoSection />
    </Layout>
  );
}

export default SingleVenuePage;
