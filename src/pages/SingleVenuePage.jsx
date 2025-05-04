import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroGrid from '../components/onSingleVenue/HeroGrid';
import VenueInfoSection from '../components/onSingleVenue/VenueInfoSection';

import useGetVenueWithId from '../hooks/useGetVenueWithId';
function SingleVenuePage() {
  // const { setSingleVenue, singleVenue, getVenue } = useVenueStore();
  // const navigate = useNavigate();
  const { id } = useParams();
  const { venue, isLoading, error } = useGetVenueWithId(id);
  console.log('singleVenue', venue);

  return (
    <Layout>
      <HeroGrid venue={venue} isLoading={isLoading} error={error} />
      <VenueInfoSection venue={venue} isLoading={isLoading} error={error} />
    </Layout>
  );
}

export default SingleVenuePage;
